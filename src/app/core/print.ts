export function enumProps<T>(obj: T) {
  let index = 0;
  const props = [];
  for (const key in obj) {
    props.push({ key, value: obj[key], index });
    index += 1;
  }
  return props;
}

export function printObject<T>(obj: T, spaceSize: number = 2) {
  let print = "";
  let indentStr = "";
  for (let i = 0; i < spaceSize; i++) {
    indentStr += " ";
  }
  const objectProps = enumProps(obj);
  for (const { key, value, index } of objectProps) {
    let dispValue: any = value;
    if (typeof value === 'string') {
      if (!value.includes('\n') && !value.includes('"')) {
        dispValue = `"${value}"`;
      } else {
        dispValue = `\`${value}\``
      }
    }
    print += `${indentStr}${key}: ${dispValue}`
    if (index !== objectProps.length - 1) {
      print += ',\n';
    }
  }
  return print;
}

export function printArray<T>(arr: T[], spaceSize: number = 2) {
  let print = "";
  let indentStr = "";
  for (let i = 0; i < spaceSize; i++) {
    indentStr += " ";
  }
  let index = 0;
  for (const value of arr) {
    let dispValue: any = value;
    switch (typeof value) {
      case 'string':
        if (!value.includes('\n') && !value.includes('"')) {
          dispValue = `"${value}"`;
        } else {
          dispValue = `\`${value}\``;
        }
        break;
      case 'object':
        dispValue = printObject(value, spaceSize);
        break;
      default:
        dispValue = 'unknown object';
        break;
    }
    print += `${indentStr}${dispValue}`
    if (index !== arr.length - 1) {
      print += ',\n';
    }
    index++;
  }
  return print;
}
