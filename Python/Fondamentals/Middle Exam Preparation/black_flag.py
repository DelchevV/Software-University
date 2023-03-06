# Pirates are invading the sea, and you're tasked to help them plunder
# Create a program that checks if target plunder is reached. First, you will receive how many days the pirating lasts. Then you will receive how much the pirates plunder for a day. Last you will receive the expected plunder at the end.
# Calculate how much plunder the pirates manage to gather. Each day they gather the plunder. Keep in mind that they attack more ships every third day and add additional plunder to their total gain, which is 50% of the daily plunder. Every fifth day the pirates encounter a warship, and after the battle, they lose 30% of their total plunder.
# If the gained plunder is more or equal to the target, print the following:
# "Ahoy! {totalPlunder} plunder gained."
# If the gained plunder is less than the target. Calculate the percentage left and print the following:
# "Collected only {percentage}% of the plunder."
# Both numbers should be formatted to the 2nd decimal place.

days=int(input())
daily_plunder=int(input())
expected_plunder=float(input())
collected_plunder=0
for day in range(1,days+1):
    collected_plunder+=daily_plunder
    if day%3==0:
        collected_plunder+=daily_plunder*0.5
    if day%5==0:
        collected_plunder=collected_plunder*0.7
if collected_plunder>=expected_plunder:
    print(f"Ahoy! {collected_plunder:.2f} plunder gained.")
else:
    one_percent=expected_plunder/100

    print(f"Collected only {collected_plunder/one_percent:.2f}% of the plunder.")