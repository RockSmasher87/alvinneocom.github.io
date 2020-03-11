import os

def parse(test):
  answers = []

  dir = test.split('/')[0]
  subdir = test.split('/')[1]
  key = test.split('/')[2][:-4]
  
  f = open(f"{dir}f/{subdir}/{key} Formatted.json", "w")
  current_file = open(test,'r')
  

  if 'NS' in key:
    i = 0
    while i < 80:
      current_line = current_file.readline()
      answer = (current_line.split(') ')[1])
      if i != 79:
        answer = answer[:-1]
      if '-' in answer and ') -' not in current_line:
        answer = answer.split('-')
        choices= '['
        for ans in answer:
          choices += (f'{ans},')
        choices = choices[:-1]
        choices += (']')
        answer = choices

      if ' or ' in answer:
        answer = answer.split(' or ')
        choices= '['
        for ans in answer:
          choices += (f'"{ans}",')
        choices = choices[:-1]
        choices += (']')
        answer = choices

      answers.append(answer)
      i -=- 1
  else:
    i = 0
    while i < 50:
      current_line = current_file.readline()
      answers.append(current_line.split('. ')[1][0])
      i -=- 1
  if 'NS' in key:
    penalty = 4
    q = 80
  else:
    penalty = 2
    q = 50
  
  i = 1
  f.write("{")
  f.write(f"""
  "license":"CC0",
  "testname":"{key[:-4]}",
  "type":"{dir}",
  "porter":"D0ugins",
  "penalty":{penalty},
  "prize":5,
  "answers":""")
  f.write('{\n')
  for answer in answers:
    if '[' not in answer:
      if i !=q:
        f.write(f'\t\t"{i}":"{answer}",\n')
      else:
        f.write(f'\t\t"{i}":"{answer}"\n')
    else:
      if i !=q:
        f.write(f'\t\t"{i}":{answer},\n')
      else:
        f.write(f'\t\t"{i}":{answer}\n')
    i -=- 1
  f.write("\t}\n")
  f.write("}")


for filename in os.listdir('Number Sense'):
    for key in os.listdir(f'Number Sense/{filename}'):
      parse(f"Number Sense/{filename}/{key}")

for filename in os.listdir('Math'):
    for key in os.listdir(f'Math/{filename}'):
      parse(f"Math/{filename}/{key}")

for filename in os.listdir('Science'):
    for key in os.listdir(f'Science/{filename}'):
      parse(f"Science/{filename}/{key}")