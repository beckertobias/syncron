import pandas as pd
import numpy as np

df = pd.DataFrame(np.array([[10234, 10000, 75], [10348, 50000, 150], [24290, 2870, 25]]),
                   columns=['Client Number', 'Amount of payments in', 'Incentive Amount'])

df.to_csv('/Users/tobiasbecker/Desktop/testing/output.csv')