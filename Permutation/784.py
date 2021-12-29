def letterCasePermutation(self, s: str) -> List[str]:
        n = len(s)
        result = []
        i = 0
        while i < n:
            if s[i].isalpha():
                if not result:  # initial 2 items
                    result.append(f'{s[0:i]}{s[i].upper()}{s[i+1:]}')
                    result.append(f'{s[0:i]}{s[i].lower()}{s[i+1:]}')
                    i += 1
                    continue
                for j in range(len(result)):  # grow on each existing string in result
                    if result[j][i].islower():
                        result.append(f'{result[j][0:i]}{s[i].upper()}{result[j][i+1:]}')
                    else:
                        result.append(f'{result[j][0:i]}{s[i].lower()}{result[j][i+1:]}')
            i += 1
        if not len(result):
            result.append(s);
        return result