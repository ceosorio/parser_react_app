import re

def operate(a, b, op):
    if op == '+':
      return a + b
    if op == '-':
      return a - b
    if op == '*':
      return a * b
    if op == '/':
      return a / b

def string_to_list(og_string):
    list_new = []
    list_str = re.split('(\-?\d+\.?\d*)', og_string)
    list_str = [re.split('([(\-\+\*\/)])', new_str) if not new_str.lstrip('-').isdigit() else new_str for new_str in list_str ]
    for item in list_str:
      if isinstance(item, list):
        if len(item) > 1:
          list_new += [i for i in item]
        elif item[0] != '' and item[0] != ' ':
          list_new.append(float(item[0]))
      else:
        list_new.append(int(item))
    list_str = [string for string in list_new if string != ' ' and string != '']
    return list_str

def check_parenthesis(expr):
    return expr.count('(') == expr.count(')')

def validate_expr(expr):
  expr = expr.replace(' ', '')
  valid_elements = ["0","1","2","3","4","5","6","7","8","9", ".", "+","-","*","/","(",")"]
  valid = all(map(lambda char: char in valid_elements, expr))
  if not valid or not expr:
    raise ValueError(f"Expresión \"{expr}\" es Inválida.")
  elif not check_parenthesis(expr):
    raise ValueError(f"Expresión \"{expr}\" es Inválida. Parentesis Desbalanceados")