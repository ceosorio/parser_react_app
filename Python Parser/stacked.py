from modules import *

def evaluate_no_par(expression_str):
  """
  Evaluates the math expression given in 'expression_str'
  and return de result.
  """
  try:
    validate_expr(expression_str)
  except ValueError as err:
      print(f"Error: {err}")
  else:
    num_stack = []
    op_stack = []
    list_str = string_to_list(expression_str)

    for item in list_str:
      if isinstance(item, int) or isinstance(item, float):
        num_stack.append(item)
        if len(op_stack) > 0 and op_stack[-1] in ['*', '/']:
          a = num_stack.pop(0)
          b = num_stack.pop(0)
          op = op_stack.pop(0)
          num_stack.append(operate(a,b,op))
      else:
        op_stack.append(item)
    

    while len(num_stack) > 1:
      a = num_stack.pop(0)
      b = num_stack.pop(0)
      op = op_stack.pop(0)
      num_stack.append(operate(a,b,op))
    return num_stack[0]

def evaluate(string):
  #With parenthesis
  stack = ['']
  for char in f'({string})':
    if char == '(':
      # Inicia un parentesis
      stack.append('')
    elif char == ')':
      # Se cierra parentesis
      # Se evalúa lo del stack
      current_plain = stack.pop()
      stack[-1] = f'{stack[-1]}{evaluate_no_par(current_plain)}'
    else:
      # No es parentesis
      stack[-1] = stack[-1] + char
  return stack[0]


if __name__ == "__main__":
    input_usr = input('Insert expression: ')
    print(evaluate(input_usr))