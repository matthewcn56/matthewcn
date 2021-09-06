import React from "react";
import { FillableSVGProps } from "./sharedTypes";
export default function EmailSVG(props: FillableSVGProps) {
  return (
    <div style={{ width: "100%" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="35"
        height="35"
        id="svgg"
        viewBox="0 0 400 400"
      >
        <g id="svgg">
          <path
            fill={props.color}
            d="M68.440 66.682 L 69.225 67.517 69.312 85.237 L 69.400 102.958 71.311 102.958 C 72.628 102.958,73.221 102.833,73.219 102.558 C 73.217 102.338,73.000 95.049,72.736 86.361 C 72.472 77.672,72.307 70.512,72.369 70.450 C 72.432 70.387,75.203 76.379,78.528 83.765 L 84.572 97.194 86.013 97.198 L 87.453 97.202 92.887 85.630 L 98.321 74.057 98.481 87.308 C 98.569 94.596,98.770 100.775,98.928 101.039 C 99.911 102.679,100.460 102.958,102.706 102.958 L 104.901 102.958 104.249 102.258 C 103.609 101.571,103.597 101.230,103.597 83.713 L 103.597 65.867 101.439 65.868 L 99.281 65.868 93.365 78.496 C 90.112 85.441,87.377 91.125,87.288 91.126 C 87.199 91.126,84.609 85.480,81.533 78.577 L 75.939 66.027 71.797 65.937 L 67.655 65.847 68.440 66.682 M112.550 66.082 C 112.550 66.200,112.802 66.575,113.110 66.914 C 113.623 67.482,113.682 68.919,113.829 84.420 L 113.989 101.308 114.764 102.133 C 115.452 102.865,115.788 102.958,117.745 102.958 L 119.950 102.958 119.288 102.115 C 118.638 101.289,118.625 100.972,118.623 85.409 C 118.621 68.604,118.545 67.633,117.132 66.521 C 116.324 65.886,112.550 65.524,112.550 66.082 M127.578 66.046 C 127.578 66.184,127.830 66.575,128.137 66.915 C 128.651 67.482,128.710 68.919,128.857 84.420 L 129.017 101.308 129.792 102.133 C 130.480 102.865,130.815 102.958,132.773 102.958 L 134.978 102.958 134.316 102.115 C 133.665 101.288,133.653 100.976,133.653 85.190 C 133.653 74.913,133.534 68.793,133.323 68.239 L 132.993 67.371 137.560 67.553 C 146.144 67.894,149.073 70.050,149.129 76.069 C 149.183 81.844,146.078 84.816,139.502 85.280 C 136.019 85.525,135.526 86.800,138.529 87.794 C 141.177 88.671,143.840 91.603,146.603 96.686 C 150.332 103.545,153.221 105.125,157.697 102.752 L 158.753 102.191 157.606 101.994 C 155.490 101.629,154.020 100.191,149.961 94.514 C 148.841 92.947,147.072 90.754,146.031 89.640 C 144.801 88.326,144.289 87.570,144.570 87.484 C 144.809 87.412,145.699 87.173,146.549 86.953 C 157.138 84.212,157.634 69.619,147.242 66.581 C 145.484 66.068,127.578 65.580,127.578 66.046 M172.662 66.032 C 172.662 66.122,172.832 66.469,173.040 66.802 C 173.362 67.316,166.219 87.840,160.596 102.558 C 160.484 102.852,160.981 102.958,162.476 102.957 L 164.508 102.957 166.594 96.482 L 168.679 90.008 175.715 89.922 L 182.750 89.836 184.942 95.678 C 187.690 103.001,187.653 102.958,191.093 102.958 L 193.746 102.958 193.036 101.905 C 192.646 101.327,189.310 92.981,185.624 83.360 L 178.922 65.867 175.792 65.867 C 174.070 65.867,172.662 65.941,172.662 66.032 M215.000 82.174 C 212.047 91.143,209.551 98.479,209.452 98.477 C 209.353 98.474,206.683 91.532,203.519 83.049 C 196.910 65.333,197.403 66.187,193.770 66.187 L 191.188 66.187 191.822 67.066 C 192.354 67.804,195.604 76.116,204.420 99.281 L 205.759 102.798 208.869 102.889 L 211.979 102.981 211.788 102.027 C 211.641 101.288,213.009 97.195,217.869 83.833 C 225.135 63.860,224.645 65.867,222.254 65.867 L 220.368 65.867 215.000 82.174 M228.617 66.082 C 228.617 66.200,228.869 66.575,229.177 66.915 C 230.108 67.944,230.200 100.312,229.276 101.878 L 228.639 102.958 241.578 102.958 L 254.516 102.958 254.516 101.199 C 254.516 100.232,254.450 99.440,254.369 99.440 C 254.288 99.440,252.021 99.719,249.333 100.060 C 244.633 100.655,234.659 101.489,234.574 101.294 C 234.551 101.242,234.575 97.422,234.627 92.806 L 234.723 84.412 241.102 84.412 L 247.482 84.412 247.482 83.293 L 247.482 82.174 241.087 82.174 L 234.692 82.174 234.688 75.699 C 234.685 72.138,234.597 68.901,234.491 68.505 C 234.307 67.819,234.384 67.786,236.174 67.789 C 239.223 67.795,248.292 68.837,251.559 69.558 C 252.243 69.709,252.278 69.622,252.278 67.792 L 252.278 65.867 240.448 65.867 C 233.941 65.867,228.617 65.964,228.617 66.082 M260.592 66.082 C 260.592 66.200,260.843 66.575,261.151 66.915 C 262.018 67.873,262.011 100.768,261.144 102.092 L 260.577 102.958 272.255 102.958 L 283.933 102.958 283.933 101.199 C 283.933 99.153,284.167 99.227,279.936 99.928 C 277.556 100.322,268.084 101.359,266.855 101.359 C 266.607 101.359,266.536 96.909,266.608 85.931 C 266.720 68.660,266.683 68.073,265.385 66.775 C 264.520 65.910,260.592 65.342,260.592 66.082 M332.431 67.883 C 331.531 68.583,331.487 68.585,314.126 68.678 L 296.723 68.771 296.723 70.517 L 296.723 72.262 298.881 72.250 C 300.068 72.244,307.442 72.042,315.268 71.803 C 323.094 71.563,329.522 71.390,329.554 71.419 C 329.585 71.448,323.542 74.210,316.125 77.557 L 302.638 83.644 302.543 85.095 L 302.447 86.545 314.294 92.114 L 326.141 97.682 312.257 97.842 L 298.372 98.002 297.547 98.777 C 296.815 99.465,296.723 99.800,296.723 101.758 L 296.723 103.963 297.565 103.301 C 298.394 102.648,298.685 102.638,316.125 102.638 L 333.842 102.638 333.748 100.484 L 333.653 98.331 321.115 92.442 C 314.219 89.202,308.640 86.449,308.717 86.324 C 308.795 86.199,314.473 83.597,321.336 80.542 L 333.813 74.988 333.813 71.067 C 333.813 66.862,333.796 66.822,332.431 67.883 M178.850 79.456 L 181.841 87.450 175.926 87.537 C 172.673 87.585,169.942 87.555,169.857 87.469 C 169.772 87.384,170.962 83.460,172.503 78.749 C 174.661 72.149,175.367 70.331,175.581 70.823 C 175.734 71.175,177.204 75.060,178.850 79.456 M332.751 112.150 C 332.237 112.665,330.844 112.723,315.496 112.870 C 295.718 113.059,296.723 112.837,296.723 117.029 L 296.723 118.991 297.565 118.329 C 298.392 117.678,298.704 117.666,314.522 117.666 C 334.070 117.666,333.813 117.722,333.813 113.438 C 333.813 111.471,333.640 111.261,332.751 112.150 M99.934 118.385 C 100.317 120.593,101.204 128.487,101.453 131.894 L 101.570 133.493 85.244 133.405 C 65.551 133.298,66.187 133.164,66.187 137.424 L 66.187 139.455 67.030 138.792 C 68.351 137.753,101.113 137.753,102.435 138.792 L 103.277 139.455 103.277 127.761 L 103.277 116.067 101.405 116.067 L 99.533 116.067 99.934 118.385 M332.694 127.312 C 331.799 127.855,330.647 127.894,315.657 127.896 C 296.036 127.898,296.723 127.746,296.723 132.083 L 296.723 134.072 297.395 133.463 C 298.130 132.797,297.511 132.818,322.427 132.615 L 332.303 132.534 332.119 136.851 C 331.820 143.885,330.377 146.700,326.481 147.849 C 319.666 149.859,314.887 146.176,314.390 138.529 C 314.170 135.149,312.993 134.615,311.990 137.440 C 310.898 140.515,308.380 142.800,302.781 145.797 C 296.399 149.212,295.167 151.234,296.575 155.977 C 297.163 157.958,297.529 158.077,297.801 156.376 C 298.065 154.728,299.984 152.763,304.392 149.627 C 306.235 148.316,308.716 146.327,309.904 145.208 C 311.290 143.903,312.109 143.330,312.190 143.610 C 312.260 143.849,312.493 144.692,312.709 145.484 C 314.139 150.735,317.759 153.619,322.935 153.631 C 331.799 153.651,333.947 149.708,333.743 133.788 L 333.653 126.729 332.694 127.312 M99.776 146.843 C 100.336 149.857,101.817 165.468,101.542 165.468 C 101.529 165.468,97.742 165.427,93.125 165.377 L 84.732 165.287 84.732 158.743 L 84.732 152.198 83.613 152.198 L 82.494 152.198 82.494 158.741 L 82.494 165.284 75.220 165.376 C 71.219 165.426,67.917 165.463,67.882 165.458 C 67.690 165.427,68.540 156.206,69.075 152.518 C 69.419 150.144,69.702 148.022,69.703 147.802 C 69.704 147.530,69.140 147.402,67.946 147.402 L 66.187 147.402 66.187 159.416 L 66.187 171.429 67.030 170.767 C 68.351 169.727,101.113 169.727,102.435 170.767 L 103.277 171.429 103.277 158.456 L 103.277 145.484 101.400 145.484 L 99.523 145.484 99.776 146.843 M296.723 161.570 L 296.723 163.561 303.277 165.737 L 309.832 167.913 309.832 174.880 L 309.832 181.847 303.997 184.046 C 296.809 186.753,296.723 186.827,296.723 190.243 L 296.723 192.825 297.602 192.193 C 298.086 191.846,306.431 188.514,316.147 184.789 L 333.813 178.016 333.813 174.887 L 333.813 171.758 332.920 172.095 C 332.133 172.392,330.293 171.800,317.333 167.079 C 309.251 164.134,301.307 161.243,299.680 160.653 L 296.723 159.580 296.723 161.570 M321.011 171.644 C 327.147 173.692,329.292 174.531,328.840 174.709 C 328.497 174.843,324.836 176.224,320.703 177.778 C 316.571 179.331,312.938 180.701,312.630 180.823 C 312.109 181.028,312.070 180.624,312.070 174.934 C 312.070 171.574,312.180 168.825,312.315 168.825 C 312.449 168.825,316.362 170.094,321.011 171.644 M66.251 177.472 L 66.347 179.486 82.709 184.947 L 99.071 190.408 85.427 195.501 C 64.482 203.320,66.507 202.200,66.507 205.966 L 66.507 208.452 67.546 207.845 C 68.410 207.341,86.395 200.354,99.840 195.300 L 103.277 194.008 103.277 190.856 L 103.277 187.704 102.504 188.056 C 101.833 188.361,82.948 181.823,66.570 175.616 C 66.250 175.495,66.177 175.923,66.251 177.472 M332.534 190.933 C 332.094 191.261,323.893 194.533,314.309 198.204 L 296.882 204.878 296.791 208.190 C 296.717 210.823,296.780 211.422,297.094 211.107 C 297.312 210.890,297.752 210.711,298.073 210.711 C 298.499 210.711,328.719 221.568,333.253 223.350 C 333.751 223.545,333.813 223.343,333.813 221.533 L 333.813 219.497 317.523 214.075 C 308.564 211.092,301.308 208.576,301.398 208.483 C 301.489 208.389,308.488 205.712,316.953 202.533 C 334.572 195.915,333.575 196.507,333.428 192.754 L 333.333 190.336 332.534 190.933 M102.275 206.735 C 102.000 207.010,93.804 210.292,84.061 214.028 L 66.347 220.822 66.256 223.902 L 66.164 226.982 67.215 226.818 C 68.085 226.681,91.801 234.980,102.398 239.128 L 103.277 239.473 103.277 237.412 L 103.277 235.352 96.717 233.225 L 90.156 231.097 90.242 224.058 L 90.328 217.020 96.083 214.830 C 103.085 212.166,103.277 212.000,103.277 208.615 C 103.277 206.159,103.129 205.881,102.275 206.735 M87.930 224.141 C 87.930 227.482,87.894 230.213,87.850 230.209 C 86.467 230.093,70.656 224.455,71.143 224.252 C 73.382 223.315,87.203 218.125,87.530 218.098 C 87.837 218.073,87.930 219.476,87.930 224.141 M296.723 240.584 L 296.723 253.557 298.481 253.557 C 299.448 253.557,300.240 253.491,300.240 253.410 C 300.240 253.328,299.962 251.062,299.622 248.374 C 298.999 243.452,298.177 233.725,298.375 233.626 C 298.433 233.597,302.258 233.614,306.875 233.663 L 315.268 233.754 315.268 240.138 L 315.268 246.523 316.387 246.523 L 317.506 246.523 317.506 240.128 L 317.506 233.733 324.194 233.733 C 327.873 233.733,331.111 233.646,331.389 233.539 C 332.306 233.187,331.285 246.863,330.103 250.759 C 329.954 251.249,330.174 251.319,331.873 251.319 L 333.813 251.319 333.813 239.493 L 333.813 227.667 332.774 228.301 C 331.114 229.313,298.854 229.288,297.565 228.274 L 296.723 227.611 296.723 240.584 M102.170 242.578 C 101.882 244.111,99.381 246.587,94.964 249.710 C 93.118 251.015,90.707 252.977,89.608 254.070 C 87.911 255.757,87.610 255.948,87.610 255.336 C 87.610 248.109,78.184 242.820,71.463 246.277 C 67.107 248.517,66.193 251.653,66.189 264.372 L 66.187 272.468 67.030 271.806 C 67.856 271.156,68.172 271.143,83.736 271.141 C 103.341 271.139,103.277 271.153,103.277 266.943 C 103.277 264.914,103.169 264.777,102.230 265.627 C 101.675 266.130,100.635 266.195,91.973 266.268 C 86.672 266.312,79.044 266.384,75.022 266.428 L 67.711 266.507 67.867 261.871 C 68.140 253.762,70.051 251.077,75.783 250.745 C 80.057 250.498,82.795 251.946,84.365 255.286 C 85.094 256.837,85.843 261.150,85.601 262.411 C 85.477 263.064,85.585 263.149,86.535 263.149 C 87.358 263.149,87.610 263.014,87.610 262.573 C 87.610 259.976,90.995 256.530,96.585 253.436 C 103.813 249.436,104.795 247.996,103.429 243.397 C 102.815 241.330,102.448 241.091,102.170 242.578 M296.723 271.253 L 296.723 282.974 298.523 282.974 L 300.323 282.974 300.119 281.775 C 299.712 279.380,298.699 270.917,298.502 268.265 L 298.301 265.548 314.218 265.646 C 333.862 265.768,333.813 265.779,333.813 261.508 C 333.813 259.478,333.705 259.342,332.765 260.192 C 331.767 261.096,298.397 261.049,297.396 260.142 L 296.723 259.533 296.723 271.253 M101.998 280.815 C 100.978 281.325,99.468 281.374,84.796 281.374 C 65.402 281.375,66.187 281.198,66.187 285.560 L 66.187 287.549 66.860 286.940 C 67.498 286.362,68.385 286.323,84.366 286.171 C 104.174 285.983,103.487 286.141,103.216 281.824 L 103.118 280.256 101.998 280.815 M102.158 295.815 C 101.260 296.362,100.085 296.400,83.678 296.401 L 66.158 296.403 66.252 298.542 L 66.347 300.680 79.006 306.626 L 91.665 312.572 79.006 318.216 L 66.347 323.860 66.257 327.894 L 66.168 331.928 67.163 331.192 L 68.159 330.456 85.718 330.368 L 103.277 330.280 103.277 328.478 L 103.277 326.676 94.884 326.890 C 90.268 327.008,82.894 327.187,78.497 327.287 L 70.504 327.470 72.102 326.702 C 72.982 326.280,79.061 323.514,85.612 320.557 L 97.522 315.180 97.522 313.828 L 97.522 312.475 89.608 308.729 C 85.256 306.669,79.944 304.168,77.803 303.171 L 73.912 301.359 87.570 301.199 C 104.035 301.006,103.482 301.160,103.216 296.839 L 103.118 295.230 102.158 295.815 M242.526 297.001 L 241.247 297.583 242.268 297.814 C 244.138 298.236,245.827 299.864,249.502 304.789 C 251.507 307.475,253.798 310.271,254.593 311.003 L 256.039 312.333 254.904 312.546 C 243.807 314.628,241.445 329.882,251.733 333.026 C 254.435 333.852,272.422 334.650,272.422 333.943 C 272.422 333.839,272.134 333.388,271.783 332.941 C 271.162 332.152,271.143 331.643,271.143 315.944 C 271.142 296.383,271.224 296.740,266.747 296.727 C 265.032 296.723,264.703 296.981,265.539 297.675 C 266.305 298.311,266.355 299.342,266.433 316.180 L 266.507 332.279 261.711 332.151 C 254.800 331.966,252.355 330.707,251.173 326.725 C 249.121 319.816,253.312 314.628,260.945 314.628 L 263.149 314.628 263.149 313.659 C 263.149 313.016,262.961 312.631,262.590 312.515 C 258.978 311.386,256.542 309.061,253.899 304.220 C 249.619 296.381,247.228 294.863,242.526 297.001 M116.067 298.666 L 116.067 300.610 116.946 300.431 C 120.056 299.796,129.840 298.651,132.214 298.644 L 133.493 298.641 133.396 314.548 C 133.276 334.154,133.174 333.643,137.284 334.027 C 139.521 334.236,139.760 334.092,138.849 333.085 C 137.908 332.046,137.825 299.210,138.761 297.945 C 139.117 297.463,139.408 296.990,139.408 296.895 C 139.408 296.800,134.157 296.723,127.738 296.723 L 116.067 296.723 116.067 298.666 M145.484 298.666 L 145.484 300.610 146.363 300.429 C 149.614 299.758,165.165 298.312,165.381 298.661 C 165.429 298.738,165.427 302.506,165.377 307.034 L 165.287 315.268 158.902 315.268 L 152.518 315.268 152.518 316.387 L 152.518 317.506 158.901 317.506 L 165.284 317.506 165.376 324.780 C 165.426 328.781,165.433 332.112,165.392 332.184 C 165.189 332.529,152.578 331.196,148.761 330.426 L 147.722 330.216 147.722 332.174 L 147.722 334.133 159.552 334.133 C 166.059 334.133,171.383 334.047,171.383 333.943 C 171.383 333.839,171.095 333.388,170.743 332.941 C 169.750 331.678,169.747 299.390,170.740 297.762 L 171.373 296.723 158.429 296.723 L 145.484 296.723 145.484 298.666 M188.085 297.622 C 188.386 298.419,187.697 300.514,181.982 316.192 C 178.439 325.912,175.540 333.931,175.540 334.013 C 175.540 334.096,176.427 334.120,177.513 334.068 L 179.486 333.973 184.965 317.530 L 190.445 301.088 195.814 315.452 C 203.293 335.457,202.330 333.813,206.566 333.813 L 208.774 333.813 208.064 332.754 C 207.674 332.172,204.347 323.826,200.672 314.209 L 193.990 296.723 190.868 296.723 L 187.745 296.723 188.085 297.622 M206.235 296.969 C 206.235 297.142,206.429 297.444,206.665 297.641 C 207.250 298.126,207.254 298.137,214.573 317.266 L 221.026 334.133 224.182 334.133 C 227.046 334.133,227.915 333.888,227.018 333.333 C 226.374 332.935,226.815 331.559,233.061 314.437 C 237.607 301.976,239.307 296.953,239.016 296.841 C 238.791 296.755,237.907 296.729,237.050 296.783 L 235.492 296.882 233.255 303.517 L 231.018 310.152 224.102 310.152 L 217.187 310.152 215.009 304.345 C 212.254 297.002,212.192 296.925,208.824 296.772 C 207.261 296.701,206.235 296.779,206.235 296.969 M280.096 296.875 C 280.096 296.999,280.384 297.467,280.735 297.914 C 281.356 298.703,281.375 299.211,281.375 314.842 C 281.375 334.376,281.224 333.644,285.335 334.028 C 287.562 334.236,287.801 334.091,286.890 333.085 C 286.377 332.518,286.318 331.080,286.171 315.561 L 286.011 298.655 285.140 297.784 C 284.301 296.945,280.096 296.187,280.096 296.875 M295.744 297.723 C 296.385 298.776,296.401 299.208,296.402 316.481 L 296.403 334.162 298.515 334.067 L 300.626 333.973 306.588 321.280 C 309.867 314.299,312.634 308.687,312.736 308.810 C 312.838 308.932,315.428 314.679,318.491 321.580 L 324.061 334.126 327.978 334.130 C 330.132 334.131,331.894 334.055,331.894 333.960 C 331.894 333.865,331.571 333.349,331.175 332.814 L 330.456 331.842 330.365 314.282 L 330.275 296.723 328.527 296.723 L 326.779 296.723 326.798 299.840 C 326.808 301.555,327.004 309.001,327.232 316.387 C 327.459 323.773,327.630 329.841,327.611 329.871 C 327.592 329.900,326.367 327.239,324.890 323.955 C 323.414 320.672,320.626 314.496,318.697 310.232 L 315.188 302.478 313.869 302.478 L 312.550 302.478 306.954 314.383 L 301.359 326.288 301.199 312.472 L 301.039 298.655 300.168 297.784 C 299.438 297.054,298.958 296.892,297.192 296.780 L 295.087 296.646 295.744 297.723 M230.080 312.950 C 226.331 324.689,224.519 329.454,224.150 328.537 C 223.757 327.560,220.666 319.355,219.001 314.868 L 218.082 312.390 224.170 312.390 C 229.824 312.390,230.246 312.430,230.080 312.950"
            fill-rule="evenodd"
          ></path>
        </g>
      </svg>
    </div>
  );
}
