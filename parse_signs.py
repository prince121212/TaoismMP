#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
解析赵公明财神灵签61签数据
"""

import re
import json

def parse_signs(file_path):
    """解析签书文件"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 分割每一签
    signs = []
    pattern = r'第(\d+)签\s+(\S+)\s+(\S+)\s+签诗：(.+?)\s+圣意：(.+?)\s+解曰：(.+?)\s+释义：(.+?)\s+-{10,}'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    for match in matches:
        number = int(match[0])
        level = match[1]  # 大吉、中吉等
        name = match[2]   # 飞龙在天等
        poem = match[3].strip()
        shengyi = match[4].strip()
        jiecao = match[5].strip()
        shiyi = match[6].strip()
        
        sign = {
            'id': f'sign_{number:03d}',
            'number': number,
            'title': level,
            'name': name,
            'poem': poem,
            'shengyi': shengyi,
            'meaning': jiecao,
            'advice': shiyi,
            'category': get_category(level),
            'tags': ['财运', '事业', '婚姻']
        }
        signs.append(sign)
    
    return signs

def get_category(level):
    """根据吉凶等级返回分类"""
    if '大吉' in level:
        return 'daji'
    elif '中吉' in level:
        return 'zhongji'
    elif '中平' in level:
        return 'zhongping'
    elif '下下' in level:
        return 'xiaxia'
    else:
        return 'other'

def generate_js_file(signs, output_path):
    """生成JavaScript文件"""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('// miniprogram/data/signs.js\n')
        f.write('// 赵公明财神灵签 - 61签完整版\n\n')
        f.write('const SIGNS = [\n')
        
        for i, sign in enumerate(signs):
            f.write('  {\n')
            f.write(f"    id: '{sign['id']}',\n")
            f.write(f"    number: {sign['number']},\n")
            f.write(f"    title: '{sign['title']}',\n")
            f.write(f"    name: '{sign['name']}',\n")
            f.write(f"    poem: '{sign['poem']}',\n")
            f.write(f"    shengyi: '{sign['shengyi']}',\n")
            f.write(f"    meaning: '{sign['meaning']}',\n")
            f.write(f"    advice: '{sign['advice']}',\n")
            f.write(f"    category: '{sign['category']}',\n")
            f.write(f"    tags: {json.dumps(sign['tags'], ensure_ascii=False)}\n")
            
            if i < len(signs) - 1:
                f.write('  },\n')
            else:
                f.write('  }\n')
        
        f.write(']\n\n')
        f.write('module.exports = {\n')
        f.write('  SIGNS\n')
        f.write('}\n')

if __name__ == '__main__':
    input_file = 'miniprogram/assets/赵公明财神灵签61签（TXT完整版）.md'
    output_file = 'miniprogram/data/signs_new.js'
    
    print('开始解析签书文件...')
    signs = parse_signs(input_file)
    print(f'解析完成，共 {len(signs)} 签')
    
    print('生成JavaScript文件...')
    generate_js_file(signs, output_file)
    print(f'文件已生成：{output_file}')

