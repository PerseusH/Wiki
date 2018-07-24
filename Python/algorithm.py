# encoding=utf-8


import logging
import random
import re


# 获得一个int型数的二进制中1的个数
# def Binary_1_Count():
#     n = random.randint(0, 1000)
#     logging.info('int: %s', n)
#     logging.info('binary: %s', bin(n))
#
#     ### algorithm begin ###
#     count = 0
#
    # 1. complexity: O(log2 N))
#     # while n is not 0:
#     #     count += n & 1 #验证末位值
#     #     n >>= 1
#
#     # 2. complexity: O(1 ~ log2 N)
#     while n is not 0:
#         n = n & (n - 1) #去除末尾0
#         count += 1
#     ### algorithm end ###
#
#     logging.info('1 count: %s', count)


# 输入一个数组，实现一个函数，让所有奇数都在偶数前面
# def Odd_before_even():
#     arr = randints(100)
#     logging.info('Int Array: %s', arr)
#
#     ### algorithm begin ###
#     i, j, length = 0, 0, len(arr)
#
#     while 1:
#         if j == length:
#             break
#
#         if arr[i] % 2 == 0:
#             arr.append(arr.pop(i))
#         else:
#             i += 1
#
#         j += 1
#
#     ### algorithm end ###
#
#     logging.info('After rebuilding: %s', arr)


# 判断一个字符串是否是另一个字符串的子串
# def Is_SubString_Of_Another():
#     sample = 'dwaefgfjhgdsfadfgrtygjt435r&Y&*^97987'
#     substr = '&Y&'
#     logging.info('Sample: %s', sample)
#     logging.info('SubString: %s', substr)
#
#     ### algorithm begin ###
#     lsub, lsmpl, is_substr = len(substr), len(sample), False
#     i = j = 0
#
#     while i < lsmpl:
#
#         while j < lsub:
#             if sample[i] == substr[j]:
#                 i, j = i + 1, j + 1
#             else:
#                 break
#
#             if j == lsub:
#                 is_substr = True
#         i += 1
#     ### algorithm end ###
#
#     if is_substr:
#         logging.info('"%s" is substring of "%s".', substr, sample)
#     else:
#         logging.info('"%s" is NOT substring of "%s".', substr, sample)


# Fibonacci
# def Fibonacci():
#     def _generator(count):
#         ### algorithm begin ###
#         a = b = 1
#         for i in range(count):
#             yield a
#             a, b = b, a + b
#         ### algorithm end ###
#
#     for i in _generator(20):
#         logging.info(i)


# 通过两个栈实现一个队列
# class Queue():
#
#     def __init__(self):
#         self.stack1 = [] #writing stack
#         self.stack2 = [] #reading stack
#
#     def push(self, node):
#         self.stack1.append(node)
#
#     def pop(self):
#         if self.stack2:
#             return self.stack2.pop()
#         elif self.stack1:
#             while self.stack1:
#                 self.stack2.append(self.stack1.pop())
#
#             return self.stack2.pop()
#         else:
#             return None


# 把一个int型数组中的数字拼成一个串，这个串代表的数字最小
# def Numbers_Minimize():
#     rd_arr = randints(1000)
#     logging.info('Sample: %s', rd_arr)
#
#     ### algorithm begin ###
#     d = dict()
#     for data in rd_arr:
#         while data > 0:
#             i = data % 10
#             d[i] = d.get(i, [])
#             d[i].append(str(i))
#             data //= 10
#     ### algorithm end ###
#
#     result = ''.join([''.join(arr) for arr in d.values()])
#     logging.info('Result: %s', result)


# m个有序且长度为l的有序整数数组, 找出其中前n大的整数
# def Get_Top_N_Max_Numbers_Of_M_IntArrays():
#     m, n, l = 3, 5, 10
#     result = []
#     arrs = [randints(500, sorted=1) for i in range(m)]
#     for arr in arrs:
#         logging.info('Array: %s', arr)
#
#     ###algorithm begin###
#     #插入排序 时间复杂度 O(N**2) 空间复杂度 O(2)
#     def insert_sorted(L, data, update=0):
#         if data in L:
#             return
#
#         if update:
#             L[0] = data
#         else:
#             L.append(data)
#
#         lth = len(L)
#         for i in range(lth):
#             if update:
#                 if i == lth - 1:
#                     break
#                 elif L[i] > L[i + 1]:
#                     L[i], L[i + 1] = L[i + 1], L[i]
#             else:
#                 j = lth - 1 - i
#                 if j == 0 or L[j] >= L[j - 1]:
#                     break
#                 else:
#                     L[j - 1], L[j] = L[j], L[j - 1]
#
#     while l > 0:
#         k = 0
#         while k < m:
#             lth = len(result)
#             arr = arrs[k]
#             data = arr[l - 1]
#             if lth < n:
#                 insert_sorted(result, data)
#                 k += 1
#             elif data > result[0]:
#                 insert_sorted(result, data, update=1)
#                 k += 1
#             else:
#                 arrs.pop(k)
#                 m -= 1
#         l -= 1
#     ###algorithm end###
#     logging.info('Result: %s', result)


# 倒序打印一个单链表


# ListDistinct


# ListReverse


# 给定一个单链表的头指针和一个指定节点的指针，在O(1)时间删除该节点


# 找到链表倒数第K个节点


# MergeTwoList


# 求两有序整数数组的交集
# def Intersection_Of_Two_Int_Arrays():
#     length = 20
#     la = sorted(randints(1, 100, length))
#     lb = sorted(randints(1, 100, length))
#     lis = []
#     logging.info('Int list A: %s', la)
#     logging.info('Int list B: %s', lb)
#
#     ### algorithm begin ###
#     # 大的等, 小的加, 相等的都加(时间复杂度O(n), 空间复杂度O(3n))
#     # i, j = 0, 0
#     # while i < length - 1 or j < length - 1:
#     #     while la[i] < lb[j] and i < length - 1:
#     #         i += 1
#     #     while la[i] > lb[j] and j < length - 1:
#     #         j += 1
#     #     if la[i] == lb[j]:
#     #         lis.append(la[i])
#     #         if i < length - 1:
#     #             i += 1
#     #         if j < length - 1:
#     #             j += 1
#
#     # 时间复杂度O(n), 空间复杂度O(2n)
#     i, j = 0, 0
#     while j < length - 1:
#         while la[i] < lb[j]:
#             la.pop(i)
#         while la[i] > lb[j] and j < length - 1:
#             j += 1
#         if la[i] == lb[j]:
#             i += 1
#             if j < length - 1:
#                 j += 1
#     ### algorithm end ###
#
#     logging.info('Intersection: %s', la[:i])


# 输入两个链表，找到它们第一个公共节点


# 合并排序，将两个已经排序的数组合并成一个数组，其中一个数组能容下两个数组的所有元素


# QuickSort
# def Quick_Sort():
    # '''
    # 最坏情况 -> 每次选取的枢纽都是最小/大值, 时间复杂度为O(N**2)
    #     解决方案 -> 随机取枢纽, 三数取中
    #         三数取中 -> 取l[l], l[(l + r) // 2], l[r]三者大小为中的. 取值时顺便排序
    # 最好情况 -> 每次选取的枢纽都是中间值, 时间复杂度为O(NlgN)
    # 平均时间复杂度 -> O(NlgN)
    # 最优空间复杂度: O(lgN) 最差空间复杂度: O(N)
    # 每次执行都会产生一个位置中间值支持下次递归调用，必须使用栈。所以空间复杂度就是栈使用的空间
    # 当函数被递归调用时，它的变量空间是创建于运行时堆栈上的。上级调用的函数变量仍保留在堆栈上，但它们被新递归函数的变量所掩盖，因此是不能被访问的。递归结束时堆栈空间反向依次释放
    # '''
#     def qs(l, start=0, end=9):
#         ### algorithm begin ###
#         if start >= end: #Recurse must exit!!!
#             return
#
#         i, j = start, end
#         while i < j:
#             while i < j:
#                 if l[i] > l[j]:
#                     l[i], l[j] = l[j], l[i]
#                     break
#                 j -= 1
#
#             while i < j:
#                 if l[i] > l[j]:
#                     l[i], l[j] = l[j], l[i]
#                     break
#                 i += 1
#
#         qs(l, start, i-1)
#         qs(l, i+1, end)
#         ### algorithm end ###
#
#     l = randints(1, 1000, 15)
#     logging.info('Int list: %s', l)
#     qs(l, 0, len(l)-1)
#     logging.info('After QS: %s', l)


# HeapSort
def Heap_Sort():
    '''
    1.建堆(升) 2.排序(降)
    时间复杂度O(NlgN)
    空间复杂度O(1)(就地排序)
    '''
    smpl = randints(1, 100)
    logging.info('Sample: %s', smpl)

    def HS(seq):
        def down(s, icur=0, ilast=9):
            '''
            @s -> sequence
            @icur -> index of current item
            @_len -> countable length of items
            '''
            while icur <= (ilast - 1)//2:
                il, ir = icur*2 + 1, icur*2 + 2

                if il < ilast:
                    if ir < ilast:
                        if s[il] > s[ir] and s[icur] > s[ir]:
                            s[icur], s[ir] = s[ir], s[icur]
                            icur = ir
                        elif s[ir] > s[il] and s[icur] > s[il]:
                            s[icur], s[il] = s[il], s[icur]
                            icur = il
                        else:
                            break
                    elif s[icur] > s[il]:
                        s[icur], s[il] = s[il], s[icur]
                        icur = il
                        break
                    else:
                        break
                else:
                    break

            return seq

        _len = len(seq)
        for i in list(range(_len))[::-1]:
            while i > 0:
                iprt = (i - 1)//2
                if seq[iprt] > seq[i]:
                    seq[i], seq[iprt] = seq[iprt], seq[i]
                    seq = down(seq, i)

                i = iprt

        for i in range(_len - 1):
            seq[0], seq[_len - 1 - i] = seq[_len - 1 - i], seq[0]
            seq = down(seq, 0, _len - 1 - i)

        return seq[::-1]

    result = HS(smpl)
    logging.info(result)


# 一个列表A=[A1，A2，…,An]，打印出来列表中所有的组合情况
# def Print_All_The_Combinations():
#     '''
#     三个维度: 垂直, 水平, 水平子串
#     '''
#     smpl = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7','A8', 'A9', 'A10']
#     logging.info('Sample: %s', smpl)
#
#     ### algorithm begin ###
#     combs, length = [], len(smpl)
#     i = 0
#     while i < length:
#         j = i + 1
#         logging.info([smpl[i]])
#         while j < length:
#             k = j
#             tmp = [smpl[i]]
#             while k < length:
#                 tmp.append(smpl[k])
#                 logging.info(tmp)
#                 k += 1
#             j += 1
#         i += 1
#     ### algorithm end ###


# BinarySearch


# BinaryTree


# MirrorOfABinaryTree（每个节点的左右子节点交换位置）


# BTree/B+Tree


# RBTree


def randints(*args, length=10, sorted=0):
    '''
    Generate a set of ints.
    '''
    if args is ():
        raise ValueError('No arguments!')

    len_args = len(args)
    start, stop, length = {
     1: (0, args[0], length if args[0] - 0 > length else args[0] // 2),
     2: (args[0], args[-1], length if args[-1] - args[0] > length else (args[-1] - args[0]) // 2) if args[0] < args[-1] else (0, args[0], args[-1]),
     3: (args[0], len_args > 1 and args[1], args[-1])
    }.get(len_args)

    if stop - start < length:
        length = (stop - start) // 2

    ints = []
    offset = (stop - start) // length
    for i in range(length):
        ints.append(random.randint(start, start + offset))
        start += offset

    return random.sample(ints, length) if sorted == 0 else ints


def exec(func):
    '''
    Execute a function.
    '''
    logging.info('-- %s --', re.sub(r'_', ' ', func.__name__))
    func()
    logging.info('-- END --')


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s: %(message)s', datefmt='%Y-%m-%d %H:%M:%S')

    exec(Heap_Sort)
    # logging.info(randints(300, 20))
