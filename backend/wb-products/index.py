import json
import os
from typing import Dict, Any
import urllib.request
import urllib.error

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Fetch products from Wildberries seller catalog
    Args: event with httpMethod, queryStringParameters
          context with request_id
    Returns: HTTP response with products list
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    wb_token = os.environ.get('WB_API_TOKEN')
    if not wb_token:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'WB_API_TOKEN not configured'}),
            'isBase64Encoded': False
        }
    
    seller_id = '558497'
    
    try:
        req = urllib.request.Request(
            f'https://suppliers-api.wildberries.ru/content/v2/get/cards/list',
            headers={
                'Authorization': wb_token,
                'Content-Type': 'application/json'
            },
            method='POST',
            data=json.dumps({
                'settings': {
                    'cursor': {
                        'limit': 100
                    },
                    'filter': {
                        'withPhoto': -1
                    }
                }
            }).encode('utf-8')
        )
        
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            
            products = []
            if 'cards' in data:
                for card in data['cards']:
                    nm_id = card.get('nmID')
                    product = {
                        'id': nm_id,
                        'name': card.get('object', ''),
                        'brand': card.get('brand', ''),
                        'description': card.get('description', ''),
                        'link': f'https://www.wildberries.ru/catalog/{nm_id}/detail.aspx',
                        'images': []
                    }
                    
                    if 'photos' in card and len(card['photos']) > 0:
                        for photo in card['photos'][:3]:
                            if 'big' in photo:
                                product['images'].append(photo['big'])
                    
                    if 'sizes' in card and len(card['sizes']) > 0:
                        size_info = card['sizes'][0]
                        if 'price' in size_info:
                            product['price'] = size_info['price']
                    
                    if 'characteristics' in card:
                        product['characteristics'] = {}
                        for char in card['characteristics']:
                            char_name = char.get('name', '')
                            char_value = char.get('value', '')
                            if char_name and char_value:
                                product['characteristics'][char_name] = char_value
                    
                    products.append(product)
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'products': products,
                    'total': len(products)
                }, ensure_ascii=False),
                'isBase64Encoded': False
            }
    
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8') if e.fp else 'No error details'
        return {
            'statusCode': e.code,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': f'WB API error: {e.code}',
                'details': error_body
            }),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
