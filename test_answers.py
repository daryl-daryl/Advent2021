import numpy as np
data = np.loadtxt("input.txt")
ans = np.sum(data[1:] > data[:-1])
print(ans)