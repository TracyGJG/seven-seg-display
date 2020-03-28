# seven-seg-display

## 7-segment Display Emulator

This project involved emulating the presentation and processing of a 7-segment display such as those used on digital clocks and watches.
7SD are great for showing decimal digits 0-9 but can also show (with some compromises) the 6 letters (AbCdEF) required for hexidecimal digits.

Each of the three approaches described below employ the same HTML markup.

```
    <div class="seven-seg">
        <div class="seg0"></div>
        <div class="seg1"></div>
        <div class="seg2"></div>
        <div class="seg3"></div>
        <div class="seg4"></div>
        <div class="seg5"></div>
        <div class="seg6"></div>
    </div>
```

There is a container with a `.seven-seg` CSS class, Holding seven divs each with a unique CSS class `seg#`, where # is a digit 0-6.

The seven segments are arranged as follows:

     ---- 0 ----
    |           |       0: Top horizontal
    1           2       1: Top-left vertical
    |           |       2: Top-right vertical
     ---- 3 ----        3: Middle horizontal
    |           |       4: Bottom-left vertical
    4           5       5: Bottom-right vertical
    |           |       6: Bottom horizontal
     ---- 6 ----

### Mark One: CSS class mapping

This approaches addes CSS classes to the parent container to turn on specific segments (child divs), with off being the default setting. An array is used to map combinations of the CSS classses to each digit. This means, when a digit is selected, all the CSS classes required to turn on the segments that present the digit are added to the parent container.

### Make Two: bitMap to CSS class mappings

In the second approach we get closer to the way an integrated circuit (IC) achieves the same thing. We have an array (segMap) of strings, one for each digit. Each string is a bitmap of zeros and ones, one binary digit (bit) for each segment. A zero represents then the segment is off, a one when it is on, running right to left for segments 0 to 6.
Now the mapping is a little more complicated and needs processing in order to present the correct combination. However, this is the way of ICs. Although the technology to create them is very clever, ICs themselves are very simply and need additional effort to acheive results.

### Make Three: bit mapping, 16 i/p to 7 o/p

In the final example we simulate what is happening within the IC with 16 wires going in [I0-I15] (one for each hexidecimal digit) and 7 out-going wires [O0-O6] (one for each segment.) This example demonstrates just how simple the IC is inside, linking groups of in-bound wires to out-bound. So digits that require, say, the middle horizontal segment (3), such as digits (2, 3, 4, 5, 6, 8, 9, A, b, d, E and F) are all connected to out-going wire O3.

#### The next project will build on this idea to emulate a 16-segment display, capable of presenting digits and letters in upper and lower case.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0edeab0d-9b3c-4320-a973-d7991ef4a407/deploy-status)](https://app.netlify.com/sites/seven-segment-display-emulator/deploys)
