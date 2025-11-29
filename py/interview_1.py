import heapq
from typing import List, Optional



def if_file_container(filename: str) -> int:
    try:
        f = open(filename, "r")
        lines = f.readlines()
        int_numbers = [int(line) for line in lines]
        average_number = 0
        if not int_numbers:
            average_number = 0
        else:
            average_number = sum(int_numbers) / len(int_numbers)
        return average_number
        # for line in lines:
        #     try:
        #         int(line)
        #     except:
        #         return False
        # return True

    except IOError:
        raise Exception("can't process file")
    finally:
        f.close()


if __name__ == "__main__":
    if_file_container("/home/andrew/it/my-projects/interviews/py/integers.txt")