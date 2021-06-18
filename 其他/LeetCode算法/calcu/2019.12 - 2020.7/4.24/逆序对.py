# 方法一：归并排序
# 预备知识

# 「归并排序」是分治思想的典型应用，它包含这样三个步骤：

# 分解： 待排序的区间为 [l, r][l,r]，令 m = \lfloor \frac{l + r}{2} \rfloorm=⌊ 
# 2
# l+r
# ​	
#  ⌋，我们把 [l, r][l,r] 分成 [l, m][l,m] 和 [m + 1, r][m+1,r]
# 解决： 使用归并排序递归地排序两个子序列
# 合并： 把两个已经排好序的子序列 [l, m][l,m] 和 [m + 1, r][m+1,r] 合并起来
# 在待排序序列长度为 11 的时候，递归开始「回升」，因为我们默认长度为 11 的序列是排好序的。

# 思路

# 那么求逆序对和归并排序又有什么关系呢？关键就在于「归并」当中「并」的过程。我们通过一个实例来看看。假设我们有两个已排序的序列等待合并，分别是 L = \{ 8, 12, 16, 22, 100 \}L={8,12,16,22,100} 和 R = \{ 9, 26, 55, 64, 91 \}R={9,26,55,64,91}。一开始我们用指针 lPtr = 0 指向 LL 的首部，rPtr = 0 指向 RR 的头部。记已经合并好的部分为 MM。

# L = [8, 12, 16, 22, 100]   R = [9, 26, 55, 64, 91]  M = []
#      |                          |
#    lPtr                       rPtr
# 我们发现 lPtr 指向的元素小于 rPtr 指向的元素，于是把 lPtr 指向的元素放入答案，并把 lPtr 后移一位。

# L = [8, 12, 16, 22, 100]   R = [9, 26, 55, 64, 91]  M = [8]
#         |                       |
#       lPtr                     rPtr
# 这个时候我们把左边的 88 加入了答案，我们发现右边没有数比 88 小，所以 88 对逆序对总数的「贡献」为 00。

# 接着我们继续合并，把 99 加入了答案，此时 lPtr 指向 1212，rPtr 指向 2626。

# L = [8, 12, 16, 22, 100]   R = [9, 26, 55, 64, 91]  M = [8, 9]
#         |                          |
#        lPtr                       rPtr
# 此时 lPtr 比 rPtr 小，把 lPtr 对应的数加入答案，并考虑它对逆序对总数的贡献为 rPtr 相对 RR 首位置的偏移 11（即右边只有一个数比 1212 小，所以只有它和 1212 构成逆序对），以此类推。

# 我们发现用这种「算贡献」的思想在合并的过程中计算逆序对的数量的时候，只在 lPtr 右移的时候计算，是基于这样的事实：当前 lPtr 指向的数字比 rPtr 小，但是比 RR 中 [0 ... rPtr - 1] 的其他数字大，[0 ... rPtr - 1] 的其他数字本应当排在 lPtr 对应数字的左边，但是它排在了右边，所以这里就贡献了 rPtr 个逆序对。

# 利用这个思路，我们可以写出如下代码。

# 代码

class Solution:
    def mergeSort(self, nums, tmp, l, r):
        if l >= r:
            return 0

        mid = (l + r) // 2
        inv_count = self.mergeSort(nums, tmp, l, mid) + self.mergeSort(nums, tmp, mid + 1, r)
        i, j, pos = l, mid + 1, l
        while i <= mid and j <= r:
            if nums[i] <= nums[j]:
                tmp[pos] = nums[i]
                i += 1
                inv_count += (j - (mid + 1))
            else:
                tmp[pos] = nums[j]
                j += 1
            pos += 1
        for k in range(i, mid + 1):
            tmp[pos] = nums[k]
            inv_count += (j - (mid + 1))
            pos += 1
        for k in range(j, r + 1):
            tmp[pos] = nums[k]
            pos += 1
        nums[l:r+1] = tmp[l:r+1]
        return inv_count

    def reversePairs(self, nums: list) -> int:
        n = len(nums)
        tmp = [0] * n
        return self.mergeSort(nums, tmp, 0, n - 1)


solute = Solution()
print(solute.reversePairs([7,5,6,4]))