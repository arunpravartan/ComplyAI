'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ILLUSTARION -  ZOMBIEING DOODLE  ***************************/

export default function ZombieingDoodle() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M525.318 94.7581C522.223 102.949 519.13 111.141 516.035 119.332C514.051 124.581 512.069 129.829 510.086 135.078C509.382 136.939 508.991 138.848 507.631 140.14C504.425 143.182 498.671 145.118 494.818 147.258C492.237 148.692 489.655 150.126 487.074 151.56C485.743 152.3 482.792 153.229 481.859 154.457C480.833 155.81 481.318 158.295 481.318 160.166V176.32V206.758C494.651 205.091 507.985 203.425 521.318 201.758C503.554 222.255 485.791 242.751 468.027 263.248C463.649 268.299 458.334 273.161 455.072 279.038C448.13 291.548 441.344 304.148 434.482 316.702C428.094 328.387 421.706 340.073 415.318 351.758L472.787 349.312C487.666 348.679 502.951 349.631 517.287 345.414C529.105 341.938 540.922 338.463 552.74 334.987C554.312 334.524 559.208 334.001 560.322 332.736C561.365 331.551 561.343 327.074 561.638 325.558C567.216 296.888 574.317 265.294 590.597 240.615C602.269 222.924 618.019 207.435 632.443 192.008C638.073 185.987 643.801 180.038 649.231 173.834C650.622 172.245 652.631 170.442 653.551 168.512C654.145 167.265 654.975 164.889 654.606 163.782C654.446 163.302 650.735 161.58 650.203 161.238C646.442 158.821 642.714 156.353 638.978 153.897C628.48 146.995 617.992 140.076 607.434 133.266C599.203 127.956 590.995 122.326 582.313 117.763C573.314 113.033 563.403 109.704 553.968 105.967C544.434 102.19 534.882 98.4561 525.318 94.7581Z"
        fill={theme.palette.primary.lighter}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M848.91 532.342C844.332 536.656 835.995 542.446 829.405 539.813C826.095 538.491 823.268 535.588 820.253 533.716C816.711 531.516 813.381 529.315 810.378 526.383C804.387 520.531 799.851 511.982 792.775 507.401C790.397 505.861 785.755 505.531 784.105 503.072C783.366 501.969 783.297 500.296 783.433 499.021C783.729 496.275 785.212 496.437 782.734 494.421H786.583C786.657 492.934 785.173 492.811 784.067 493.003C784.581 490.646 785.105 481.423 780.809 485.603C777.085 489.226 778.948 495.237 776.311 499.161C774.292 502.166 768.934 499.733 768.211 496.427C767.886 494.942 769.522 492.623 769.717 491.167C770.145 487.938 768.703 485.146 766.609 482.701C762.015 485.762 764.619 492.097 762.001 496.119C759.632 499.758 754.356 498.06 750.749 497.42C746.425 496.652 741.536 497.429 737.399 496.408C731.152 494.866 733.485 487.532 732.867 482.798C732.204 477.727 727.079 470.689 728.619 465.573C730.273 460.08 739.942 458.893 744.564 457.56C755.127 454.513 770.194 453.927 778.047 445.397C784.293 452.363 789.317 460.339 795.868 467.045C802.944 474.288 810.502 480.975 817.295 488.51C824.365 496.352 831.663 504.043 838.476 512.112C841.449 515.632 844.059 519.425 847.134 522.861C849.868 525.915 852.75 528.725 848.91 532.342ZM534.947 396.869C538.193 395.143 538.606 396.225 538.605 399.78C537.671 398.073 536.744 397.616 534.947 396.869ZM507.427 465.975V459.709C510.556 459.627 508.632 464.987 507.427 465.975ZM506.662 475.307C506.662 472.532 506.587 469.89 507.387 467.191C507.807 470.132 508.609 472.678 506.662 475.307ZM520.116 665.929C522.99 666.198 527.419 664.218 529.836 666.473C532.319 668.79 532.12 675.534 532.708 678.664C533.68 683.837 534.541 689.027 535.36 694.225C535.897 697.633 536.561 701.094 532.708 702.398C527.014 704.324 518.878 701.575 512.943 701.325C501.219 700.832 489.5 700.146 477.766 699.908C466.393 699.678 454.994 699.86 443.673 701.043C438.559 701.577 433.558 702.521 428.496 703.375C425.828 703.826 418.679 705.711 416.269 703.462C411.735 699.228 419.273 689.343 422.515 686.551C428.532 681.37 437.089 677.634 444.634 675.384C448.666 674.181 455.388 670.804 458.564 674.581C461.001 677.478 460.904 681.345 464.396 683.54C472.487 688.626 467.753 674.037 462.697 672.241C466.092 664.295 472.563 675.514 475.247 678.209C476.202 679.168 479.308 682.33 480.657 680.74C481.667 679.55 479.65 675.286 479.276 674.126C478.708 672.364 477.271 669.684 477.684 667.773C478.432 664.315 483.282 663.373 486.187 663.085C490.692 662.639 495.111 664.067 499.565 664.544C506.395 665.276 513.278 665.287 520.116 665.929ZM474.884 340.218C465.991 340.926 457.042 339.566 448.17 340.679C439.776 341.733 431.866 344.815 423.953 347.646C435.717 320.055 450.937 294.938 469.488 271.409C478.726 259.69 488.662 248.052 498.644 236.961C503.289 231.801 508.093 226.812 512.889 221.797C517.167 217.323 520.232 209.725 525.366 206.384C529.748 203.532 537.406 205.566 542.262 205.743C547.751 205.943 554.431 206.442 559.784 204.615C563.663 203.291 564.73 199.758 559.874 199.641C554.147 199.502 548.514 200.099 542.712 199.562C527.679 198.173 513.188 195.89 498.033 197.185C494.561 197.481 489.991 198.96 486.584 198.516C484.134 198.195 485.745 199.427 484.042 197.461C483.39 196.709 482.604 194.941 482.411 193.942C481.326 188.331 484.407 180.313 485.144 174.664C485.826 169.436 485.222 163.69 486.498 158.599C487.66 153.966 491.202 153.348 495.564 152.853C507.497 151.498 519.675 150.777 531.662 149.756C559.018 147.426 587.243 143.911 614.413 149.669C624.224 151.748 636.187 154.963 644.951 160.111C647.692 161.72 650.457 163.615 649.46 166.949C648.426 170.41 643.356 174.066 640.845 176.346C622.286 193.194 604.361 210.379 591.324 231.997C574.698 259.564 565.157 289.337 559.559 320.926C558.355 327.722 557.237 331.279 550.245 333.235C542.739 335.336 535.494 336.701 527.711 337.34C510.117 338.785 492.469 338.815 474.884 340.218ZM480.843 157.658C479.495 167.693 477.67 177.706 477.49 187.82C477.422 191.64 477.06 193.554 472.998 194.406C468.209 195.41 463.34 196.158 458.529 197.2C435.31 202.232 412.53 208.412 389.814 215.368C367.737 222.13 346.023 229.737 323.45 234.746C313.74 236.901 302.378 238.353 293.534 243.124C284.02 248.258 285.272 256.675 284.418 265.92C283.277 278.272 279.614 290.232 278.326 302.579C277.71 308.479 277.149 314.414 277.242 320.351C277.321 325.412 278.046 331.008 274.644 335.267C267.819 326.143 264.584 314.667 263.239 303.484C262.585 298.048 262.844 292.568 262.657 287.107C262.506 282.71 262.604 275.716 259.74 272.044C253.514 264.064 245.417 296.044 244.647 299.459C243.352 305.207 242.284 311.003 240.994 316.752C240.422 319.3 239.688 328.563 236.274 329.486C229.199 331.4 230.752 311.519 230.64 308.492C230.416 302.382 230.264 296.265 230.407 290.15C230.511 285.736 231.365 280.946 230.858 276.53C229.613 265.687 223.516 277.111 221.802 281.147C217.471 291.336 215.512 302.242 211.628 312.594C210.982 314.316 209.464 320.113 207.059 320.221C204.383 320.34 204.404 314.353 204.251 312.604C203.363 302.465 200.364 292.397 201.269 282.153C202.183 271.809 205.809 261.175 210.94 252.178C221.788 233.156 241.378 222.234 260.142 212.285C281.616 200.901 304.287 191.907 327.442 184.58C355.29 175.768 383.884 168.638 412.65 163.564C427.285 160.983 442.146 159.137 456.931 157.657C462.127 157.137 467.325 156.833 472.454 155.844C474.39 155.47 481.375 153.693 480.843 157.658ZM495.802 125.183C488.465 125.241 480.97 121.684 473.822 120.214C465.312 118.462 457.001 115.927 448.506 114.098C431.871 110.517 415.227 107.025 398.607 103.365C391.392 101.776 384.142 100.393 376.955 98.6861C369.266 96.8601 360.959 94.8241 353.089 96.7911C341.16 99.7731 336.121 112.824 331.741 123.009C328.647 130.203 326.223 138.222 321.398 144.482C319.68 146.714 317.238 149.376 314.123 148.653C308.336 147.311 309.255 139.653 309.992 135.42C311.06 129.277 312.573 123.206 313.784 117.091C314.272 114.623 318.054 98.4701 311.302 100.971C306.293 102.826 303.643 115.044 301.747 119.408C300.338 122.651 298.845 125.873 297.264 129.036C295.154 133.255 289.134 147.352 282.469 145.534C272.931 142.932 282.08 117.857 283.705 112.572C284.597 109.671 294.292 87.6701 286.109 89.4681C282.624 90.2351 279.229 96.7081 277.452 99.3911C274.301 104.15 271.16 108.943 268.194 113.819C265.143 118.834 263.585 124.542 260.559 129.484C258.967 132.085 255.718 135.551 252.546 133.143C247.601 129.392 250.532 116.344 251.398 111.41C253.009 102.237 257.011 92.8331 262.502 85.3341C270.753 74.0661 286.322 70.4251 299.414 68.2361C316.313 65.4101 333.447 66.1831 350.417 67.8551C369.502 69.7361 388.296 71.7501 407.108 75.5961C426.067 79.4721 445.036 83.3171 463.703 88.4431C472.497 90.8581 481.417 92.9991 490.086 95.8341C499.302 98.8471 508.296 102.597 517.769 104.768C514.437 113.083 511.104 121.398 507.772 129.714C504.583 126.559 500.23 125.147 495.802 125.183ZM659.125 148.096C662.047 146.498 665.275 145.744 666.341 142.212C667.284 139.091 665.673 135.555 664.903 132.559C662.749 124.171 662.182 115.482 664.088 106.995C665.91 109.776 672.73 120.473 676.878 113.997C679.38 110.091 672.676 104.472 670.719 101.726C675.013 99.0761 681.146 91.9641 686.094 96.2531C689.292 99.0261 690.646 101.696 694.955 103.044C700.186 104.681 705.111 104.306 710.453 103.854C714.193 103.538 715.094 103.039 716.555 105.919C717.702 108.183 718.295 110.985 718.965 113.416C720.285 118.209 723.342 127.653 719.722 132.143C716.551 136.076 704.245 132.704 702.536 137.781C701.604 140.55 706.052 140.649 707.752 142.019C709.857 143.715 711.598 146.414 712.742 148.825C713.589 150.608 714.877 153.554 713.435 155.377C711.443 157.899 707.751 155.986 706.145 154.153C704.013 151.718 703.321 148.389 701.542 145.737C698.277 140.871 698.082 144.742 697.193 148.236C696.27 151.866 694.086 151.616 690.741 152.082C684.872 152.901 678.941 154.056 673.228 155.629C670.3 156.435 667.462 157.462 664.673 158.662C662.876 159.434 659.761 161.773 657.811 161.795C654.198 161.836 651.693 155.793 649.828 153.272C652.925 151.543 656.013 149.798 659.125 148.096ZM853.154 518.119C844.13 507.287 836.315 495.519 827.412 484.592C818.631 473.815 808.472 464.392 798.617 454.631C793.966 450.024 789.51 444.97 784.376 440.888C780.546 437.842 777.599 437.795 772.992 439.144C759.902 442.978 746.573 447.593 734.185 453.314C722.65 458.642 712.143 465.483 699.633 468.454C686.864 471.487 673.587 472.461 660.5 471.709C647.076 470.938 634.415 468.145 621.649 464.04C609.559 460.152 596.953 456.757 586.613 449.051C575.773 440.973 567.398 429.354 559.638 418.426C555.709 412.894 551.809 407.084 549.162 400.814C546.865 395.373 545.364 388.951 541.242 384.516C540.231 385.949 538.973 387.178 538.459 388.861C538.225 389.626 539.603 389.602 539.462 390.21C539.195 391.355 537.671 392.523 536.785 393.146C533.602 395.386 533.583 393.603 534.418 397.792C534.904 400.234 533.984 405.743 530.002 403.943C531.468 405.698 529.139 407.913 528.378 409.359C527.855 408.758 527.204 408.549 526.426 408.73C527.882 411.63 527.022 411.707 525.611 414.01C525.353 414.431 524.44 416.634 524.571 416.448C523.129 418.502 521.463 419.019 520.622 421.577C519.931 423.678 520.108 425.988 519.338 428.086C518.407 426.799 517.476 425.512 516.545 424.226C516.735 425.238 517.115 426.736 517.557 427.654C517.835 428.228 519.027 429.568 519.011 429.881C518.946 431.051 517.486 430.77 517.07 431.779C516.289 433.672 517.418 433.951 516.992 435.798C516.504 437.918 515.194 437.07 514.571 438.877C514.453 439.22 515.373 440.57 515.227 441.31C515.022 442.356 514.074 442.941 513.739 443.871C512.887 446.237 513.197 447.969 512.014 450.238C511.556 451.118 510.889 451.704 510.566 452.704C510.283 453.584 510.892 455.457 510.346 456.245C507.708 460.044 508.079 453.5 508.279 451.877C509.958 438.25 515.345 424.186 520.275 411.449C522.725 405.121 525.11 398.595 528.181 392.534C529.417 390.093 530.844 387.574 532.887 385.707C535.471 383.345 539.137 382.4 541.477 379.762C541.108 380.178 544.014 377.428 543.549 378.332C543.965 377.524 543.239 376.43 543.497 375.648C543.818 374.677 544.425 374.473 545.101 373.623C546.316 372.097 547.759 371.337 545.851 369.393C548.683 368.767 550.037 367.848 550.603 364.815C551.016 362.596 550.182 362.741 551.638 361.262C553.099 359.776 553.839 360.936 554.76 358.363C555.861 355.284 556.592 351.097 557.252 347.875C557.828 345.062 556.43 340.925 558.801 338.939C561.804 336.424 564.491 337.489 563.953 332.431C563.428 327.5 564.96 324.513 566.5 319.847C569.573 310.532 570.761 300.697 573.455 291.271C579.206 271.155 589.365 253.018 600.289 235.311C610.383 218.949 624.495 205.009 638.122 191.584C641.853 187.907 645.543 184.177 648.893 180.146C651.779 176.675 653.097 171.949 655.871 168.654C657.556 166.653 660.693 165.797 663.046 164.736C666.97 162.966 671.646 160.657 676.075 161.015C674.315 166.948 673.741 173.881 678.935 178.33C685.236 183.727 690.947 178.12 696.723 175.043C707.251 169.434 722.308 174.583 731.488 166.176C733.675 164.174 734.285 160.975 736.557 159.105C738.225 157.734 740.598 157.386 742.476 156.364C748.181 153.259 750.95 147.575 748.729 141.296C746.699 135.556 743.544 133.565 750.566 130.656C756.266 128.296 758.433 124.74 755.853 118.409C753.393 112.373 748.887 111.678 744.623 107.728C740.493 103.902 745.237 99.4491 748.331 96.5771C752.321 92.8721 753.084 89.5331 748.458 85.6801C743.614 81.6461 736.699 81.7871 731.052 83.7821C724.666 86.0371 720.459 89.7861 717.757 95.8611C715.005 102.046 708.184 100.32 702.66 98.5961C697.377 96.9481 696.002 93.3921 692.533 89.5631C688.675 85.3041 680.812 88.9461 676.262 90.8921C665.054 95.6821 653.916 103.242 653.471 116.633C653.206 124.618 656.583 131.405 658.339 138.9C659.945 145.754 648.934 145.214 647.027 151.844C626.686 141.076 604.033 137.781 581.295 137.048C557.128 136.268 532.613 135.643 508.652 139.455C514.214 129.765 517.151 119.139 521.99 109.184C523.383 106.318 523.983 106.563 527.057 107.429C532.962 109.092 538.823 110.953 544.716 112.666C566.244 118.924 587.349 126.464 608.165 134.722C610.188 135.525 614.705 137.754 616.478 135.33C618.524 132.535 613.791 129.089 611.875 127.683C603.493 121.534 593.106 117.802 583.719 113.488C563.196 104.059 540.47 99.5831 519.056 92.5801C472.827 77.4591 425.001 65.9751 376.959 58.3901C365.235 56.5391 353.386 56.2681 341.611 54.8941C331.181 53.6771 320.732 53.7051 310.303 54.9621C291.041 57.2851 268.71 62.2971 257.831 79.9291C248.01 95.8491 241.454 113.748 243.96 132.632C244.713 138.304 247.115 145.021 254.114 143.559C258.969 142.545 261.547 138.42 263.801 134.394C267.207 128.312 270.571 122.23 274.262 116.311C275.631 125.186 270.656 133.913 271.438 142.954C271.97 149.089 275.36 158.782 283.325 157.045C294.242 154.665 298.735 137.61 303.984 129.428C304.25 135.73 302.041 141.941 302.717 148.257C303.384 154.496 308.259 160.386 315.106 159.531C321.564 158.725 325.761 151.806 328.504 146.597C332.321 139.348 335.063 131.576 338.791 124.279C342.285 117.439 346.424 109.296 354.766 108.011C362.211 106.863 370.743 109.52 378.097 110.616C398.496 113.656 418.484 118.832 438.66 123.014C460.293 127.497 482.437 130.22 503.403 137.454C496.031 147.488 476.739 145.32 465.757 146.397C449.161 148.025 432.352 149.25 415.85 151.652C399.552 154.024 383.595 158.235 367.424 161.292C351.338 164.333 335.28 167.379 319.715 172.565C290.816 182.194 261.435 194.38 235.973 211.181C224.126 218.999 213.602 227.934 206.284 240.274C198.919 252.691 195.38 266.732 194.03 281.015C193.19 289.909 194.617 297.606 196.34 306.262C197.588 312.529 197.992 323.022 203.017 327.611C212.608 336.37 220.571 300.842 222.342 296.551C223.617 303.583 221.532 343.199 236.921 339.977C243.789 338.54 245.347 329.113 246.486 323.435C248.564 313.084 250.425 302.525 253.979 292.556C256.26 305.988 257.211 319.982 262.125 332.811C265.389 341.331 274.702 356.449 281.195 341.863C286.065 330.924 284.394 318.369 284.978 306.755C285.625 293.885 289.32 281.471 290.628 268.727C291.135 263.79 290.676 258.226 295.637 255.532C299.896 253.22 306.124 252.467 310.774 251.176C324.547 247.352 338.41 243.837 352.118 239.78C365.832 235.72 379.356 230.977 392.887 226.348C405.828 221.921 419.041 219.404 432.139 215.613C439.586 213.457 446.943 211.202 454.494 209.402C458.008 208.565 461.565 207.913 465.071 207.046C467.67 206.404 471.094 203.981 473.766 204.024C476.516 204.069 477.55 206.397 480.703 206.58C484.098 206.776 487.55 206.027 490.926 205.768C499.151 205.137 507.894 204.117 516.1 205.257C511.168 211.107 504.507 215.151 498.669 219.997C491.936 225.586 485.42 231.621 479.669 238.221C468.097 251.501 457.16 265.538 446.999 279.925C436.976 294.118 428.906 309.649 421.89 325.517C418.394 333.424 415 341.504 412.585 349.815C411.593 353.229 410.783 356.656 408.992 359.761C407.349 362.609 405.034 365.064 406.976 368.503C408.313 367.666 409.514 366.626 410.723 365.621C409.326 375.462 406.311 384.982 404.761 394.793C403.233 404.459 403.295 414.4 403.394 424.162C403.602 444.606 405.122 464.587 409.269 484.64C413.463 504.917 418.851 525.04 425.645 544.601C432.185 563.435 438.748 583.186 447.877 600.937C457.627 619.897 469.226 639.831 483.339 655.88C474.12 659.656 462.388 658.95 452.626 660.471C442.422 662.061 433.595 665.062 424.899 670.708C416.101 676.422 411.325 683.778 410.109 694.196C409.245 701.611 406.678 711.877 416.406 713.825C423.403 715.226 431.225 712.925 438.236 712.356C450.5 711.362 462.782 710.741 475.073 710.205C487.332 709.67 499.594 709.199 511.857 708.819C517.625 708.64 523.396 708.55 529.162 708.343C531.746 708.251 533.313 708.211 535.63 708.958C537.462 709.549 537.328 710.776 539.368 709.259C542.658 706.812 541.981 699.097 541.889 695.705C541.749 690.47 541.253 685.175 540.232 680.039C539.626 676.987 532.27 657.314 537.99 656.486C531.345 649.184 528.691 638.757 525.706 629.605C521.966 618.139 518.683 606.705 516.106 594.912C510.601 569.721 508.168 544.255 508.168 518.48C533.686 534.209 560.685 542.729 590.741 543.679C620.623 544.624 653.452 542.17 681.827 532.229C694.967 527.625 706.737 521.579 718.003 513.434C722.041 510.515 726.367 503.903 731.667 504.016C737.992 504.152 745.075 506.546 751.356 507.57C763.368 509.528 779.046 510.633 789.216 518.063C794.74 522.099 798.699 527.748 803.629 532.398C807.379 535.936 812.338 537.857 816.06 541.395C820.076 545.212 818.481 550.199 825.14 550.508C830.832 550.771 837.073 548.481 841.982 545.793C851.776 540.43 862.206 528.983 853.154 518.119Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M759.018 263.031C773.351 273.212 789.791 280.167 804.769 289.336C808.518 291.631 820.198 296.396 820.085 300.653C820.019 303.142 816.509 306.263 814.972 307.988C812.339 310.943 809.862 313.929 807.432 317.055C796.31 331.37 785.836 345.82 773.782 359.416C771.967 361.461 766.5 371.226 764.735 366.376C763.935 364.177 764.594 361.706 762.509 359.656C761.436 358.6 757.289 358.018 758.497 355.753C759.302 356.115 760.108 356.478 760.914 356.839C760.288 355.029 760.334 353.046 759.396 351.335C758.813 350.272 757.674 349.769 757.279 348.572C756.733 346.918 757.659 344.996 757.504 343.291C757.351 341.591 756.47 339.984 755.944 338.38C752.825 328.872 751.706 319.287 750.109 309.477C748.529 299.77 746.068 290.367 745.102 280.552C744.081 270.185 742.83 259.839 741.161 249.555C744.14 249.973 746.43 253.21 748.537 255.04C751.849 257.916 755.445 260.493 759.018 263.031ZM747.782 363.398C747.098 362.861 746.563 362.201 746.177 361.419C753.202 357.939 748.963 363.876 747.782 363.398ZM743.51 355.976C740.448 356.82 738.248 356.991 735.887 355.731C735.663 355.612 735.921 354.691 735.517 354.502C735.164 354.338 734.625 354.541 734.323 354.387C733.295 353.864 731.495 355.01 731.32 353.008C735.228 351.812 739.071 349.605 743.197 349.233C748.931 348.717 748.666 354.554 743.51 355.976ZM730.094 344.436C725.916 345.413 722.474 347.695 718.035 347.099C713.868 346.541 710.247 344.38 706.96 341.89C715.183 339.562 723.806 339.142 732.022 336.89C734.697 336.157 738.212 334.224 741.095 335.003C744.298 335.869 744.5 338.869 745.46 341.599C740.334 342.521 735.169 343.25 730.094 344.436ZM703.963 332.852C699.949 333.811 695.846 335.908 692.49 332.289C691.948 331.705 691.474 332.288 691.538 330.489C691.605 328.592 693.327 327.37 694.808 326.702C698.29 325.132 703.171 326.147 706.869 325.916C712.768 325.549 718.772 324.323 724.607 323.379C728.647 322.726 732.82 321.276 736.949 321.562C740.137 321.783 743.983 324.5 739.337 326.482C735.106 328.288 728.762 328.011 724.178 328.793C717.402 329.949 710.65 331.254 703.963 332.852ZM700.042 313.968C700.302 314.233 700.562 314.498 700.822 314.763C700.779 314.753 702.361 313.472 702.78 313.435C704.815 313.258 706.862 313.398 708.9 313.283C713.596 313.018 718.329 312.2 722.941 311.299C726.698 310.565 730.525 309.3 734.392 309.617C737.74 309.891 738.092 310.577 738.311 313.808C729.765 313.808 720.962 313.628 712.563 315.437C707.095 316.614 701.069 320.12 698.33 313.8C698.901 313.856 699.471 313.912 700.042 313.968ZM705.385 300.289C707.504 301.903 713.281 299.219 715.821 298.951C718.579 298.659 721.174 298.356 723.847 297.669C726.217 297.059 734.058 294.013 735.876 296.926C738.663 301.389 727.378 302.208 725.589 302.429C718.086 303.356 710.301 304.178 703 306.146C703.795 304.194 704.59 302.242 705.385 300.289ZM715.677 285.13C716.225 287.193 733.193 279.591 733.502 285.116C733.74 289.355 716.714 291.467 713.653 291.095C714.37 289.143 716.277 287.395 715.677 285.13ZM721.374 272.163C721.735 268.002 722.293 268.026 725.63 267.634C728.175 267.335 731.673 265.843 731.011 270.379C730.444 274.263 721.011 276.362 721.374 272.163ZM727.439 257.846C728.242 255.612 730.049 258.619 730.087 259.755C730.188 262.778 727.896 262.124 725.69 262.124C726.304 260.712 726.888 259.284 727.439 257.846ZM755.366 241.077C754.916 240.535 752.39 240.328 751.671 240.065C749.903 239.417 750.154 238.036 747.892 239.398C747.779 239.284 747.994 238.26 747.871 238.213C747.809 238.189 746.224 237.591 745.709 237.261C744.466 236.465 743.346 235.686 742.204 234.687C740.99 233.626 739.774 232.086 738.387 231.241C737.802 230.885 737.324 230.38 736.619 230.271C734.79 229.989 735.314 231.263 733.715 231.516C732.73 231.672 732.013 230.522 730.725 231.018C729.612 231.446 728.966 233.007 728.47 233.936C726.667 237.317 725.276 240.956 723.511 244.373C714.485 261.846 704.226 278.656 695.483 296.292C691.272 304.788 686.878 313.343 683.914 322.372C681.777 328.884 676.951 338.397 681.103 344.904C684.122 349.635 690.167 351.678 694.99 353.964C702.247 357.404 708.937 361.9 716.274 365.235C725.023 369.212 733.519 373.372 742.047 377.813C745.684 379.707 748.966 382.435 752.591 384.229C754.808 385.326 758.232 383.454 758.954 385.969C761.733 382.603 766.231 384.847 769.446 382.477C771.337 381.083 772.719 378.337 774.296 376.62C776.662 374.046 779.23 371.658 781.644 369.129C791.225 359.084 800.072 348.622 808.789 337.833C817.115 327.53 826.842 317.796 833.875 306.518C836.668 302.041 837.174 297.346 835.331 292.4C833.985 288.792 830.743 283.344 826.112 285.733C827.868 282.817 821.094 279.703 819.039 279.133C819.008 279.125 818.603 281.365 818.03 281.309C818.234 281.329 816.308 276.346 815.462 275.707C812.95 273.806 809.894 271.588 807.153 270.023C804.639 268.588 801.986 267.877 799.551 266.271C796.599 264.325 793.889 262.017 790.926 260.084C788.065 258.218 784.876 256.012 781.714 254.729C778.972 253.616 776.51 253.398 774.043 251.574C770.991 249.317 768.329 247.786 764.809 246.231C761.764 244.886 757.544 243.711 755.366 241.077Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M339.709 511.32C340.269 510.005 340.827 508.69 341.387 507.376C342.079 509.668 342.273 510.808 339.709 511.32ZM340.454 517.394C339.241 517.611 339.719 513.806 339.719 513.143C341.814 514.329 340.079 515.751 340.454 517.394ZM338.563 506.417C339.597 505.806 340.631 505.196 341.665 504.585C340.225 507.253 340.79 505.586 341.384 507.368C340.298 507.68 339.242 507.316 338.563 506.417ZM332.435 527.269C328.559 541.332 316.248 552.423 303.245 558.168C295.773 561.468 288.427 562.294 280.358 561.926C277.246 561.784 273.584 560.773 270.589 560.961C268.283 561.106 268.387 561.206 266.477 563.158C265.632 561.602 266.244 560.51 264.549 559.604C262.434 558.474 261.556 559.79 260.507 561.355C259.134 559.932 258.572 559.189 256.793 558.344C256.849 558.371 255.09 558.304 255.162 558.326C254.844 558.228 252.931 556.998 252.332 556.774C249.874 555.852 247.032 555.473 244.764 554.15C242.78 552.995 241.146 549.752 238.876 552.244C238.874 548.08 233.265 546.353 230.636 544.172C226.528 540.764 223.262 535.718 221.214 530.837C219.03 525.632 218.301 520.642 217.279 515.278C216.565 511.53 211.889 506.112 214.697 502.33C215.366 503.916 215.052 505.54 216.163 506.978C217.163 505.051 217.713 502.895 218.165 500.786C218.387 499.753 219.673 496.721 219.527 495.821C219.23 493.979 216.95 493.879 218.214 491.621C220.836 494.474 222.952 489.464 220.971 487.467C219.993 488.57 219.634 489.823 219.183 491.189C216.605 485.985 223.74 487.661 222.179 482.963C224.783 482.462 226.28 481.806 227.27 479.233C228.371 476.37 227.561 475.746 230.061 473.854C230.921 473.204 233.353 472.269 233.798 471.199C234.659 469.132 232.468 468.519 234.387 466.582C235.035 467.719 237.561 469.97 238.944 467.828C239.221 467.401 238.058 467.098 238.904 466.114C240.157 464.658 241.559 463.23 243.678 463.536C242 459.341 252.722 459.009 255.468 458.019C258.22 457.028 260.555 456.377 263.473 456.147C266.388 455.917 266.533 455.063 269.001 453.308C269.21 455.819 269.814 455.267 271.599 455.71C272.028 454.974 272.468 454.891 272.918 455.462C273.366 455.888 273.914 456.088 274.56 456.064C275.54 456.115 276.652 455.987 277.679 456.008C280.09 456.055 282.577 455.854 284.942 455.905C285.552 455.803 286.122 455.591 286.656 455.268C286.879 455.688 287.103 456.109 287.325 456.53C288.578 456.687 288.675 458.257 290.216 456.54C290.672 458.723 291.982 457.587 293.366 458.179C294.628 458.72 294.829 459.584 295.994 460.187C296.76 460.808 297.581 460.89 298.459 460.435C299.294 461.054 300.142 461.655 301.002 462.238C302.587 463.133 304.455 463.681 306.125 464.388C307.236 464.846 308.34 465.323 309.435 465.817C309.468 467.139 310.061 467.606 311.213 467.217C312.254 468.088 312.547 468.054 313.557 469.537C315.845 472.898 317.875 475.509 320.765 478.513C333.326 491.573 337.185 510.037 332.435 527.269ZM336.29 471.735C330.619 464.141 322.592 455.445 315.379 450.649C311.723 448.217 306.591 443.852 302.12 442.566C301.06 442.261 299.963 442.241 298.921 441.921C298.116 441.674 297.678 440.848 296.76 440.699C296.118 440.595 296.047 442.032 295.365 441.9C293.939 441.622 293.035 440.207 292.028 439.322C289.865 443.049 288.691 436.781 285.515 440.995C281.735 435.068 272.855 436.364 266.819 436.663C265.029 436.751 264.188 437.388 262.601 437.86C261.124 438.299 260.978 438.186 259.365 438.174C255.348 438.143 251.782 438.648 248.069 440.412C241.831 443.375 236.105 447.992 230.18 451.563C223.558 455.554 217.589 460.634 212.523 466.471C194.209 487.577 189.312 518.384 203.915 542.852C227.11 581.713 286.941 585.866 320.844 559.498C347.037 539.125 357.005 499.469 336.29 471.735Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M623.379 362.378C622.728 363.931 616.649 363.408 616.516 361.577C616.318 358.841 624.51 359.679 623.379 362.378ZM629.836 361.362C633.281 361.642 638.941 363.982 642.261 362.568C647.328 360.41 642.007 357.098 639.289 356.108C636.523 355.101 632.403 355.636 630.981 352.744C629.911 350.569 632.555 344.497 629.275 345.473C625.833 346.497 626.834 355.195 621.433 352.263C618.857 350.864 619.908 342.342 615.593 346.696C614.412 347.887 614.309 350.073 612.745 350.961C611.149 351.868 609.147 350.924 607.462 351.003C603.001 351.212 601.58 355.385 606.1 357.04C607.773 357.653 614.079 358.401 610.259 361.135C607.852 362.857 602.505 359.243 600.438 362.241C597.597 366.359 605.207 366.452 607.251 367.684C610.715 369.77 607.854 374.642 608.13 378.112C608.553 383.414 611.633 382.306 612.752 377.819C613.701 374.013 612.525 368.533 618.264 370.046C627.61 372.51 613.067 384.375 619.913 387.411C624.278 389.347 624.896 378.882 625.235 377.08C626.49 370.429 630.226 371.981 635.886 372.185C642.498 372.423 644.094 367.532 637.092 366.131C634.858 365.684 631.785 366.249 629.845 364.826C628.697 363.985 627.119 361.142 629.836 361.362Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M385.711 578.656C380.36 576.74 371.408 577.154 370.084 584.065C369.53 586.958 370.609 590.018 372.607 592.12C374.924 594.557 378.614 594.783 378.417 590.539C378.28 587.602 375.485 585.051 380.399 584.459C383.457 584.091 387.98 586.378 388.132 589.756C388.476 597.37 375.296 597.967 370.439 596.65C360.799 594.038 363.418 583.941 370.038 579.333C371.748 578.142 376.655 576.308 376.879 573.835C377.177 570.555 373.121 571.225 371.133 571.657C356.52 574.838 353.335 599.318 368.604 603.933C375.538 606.028 385.303 603.865 389.482 597.585C393.4 591.697 393.453 581.428 385.711 578.656Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.957 405.36C187.389 407.559 182.821 409.758 178.254 411.957C176.744 408.726 174.193 399.899 170.363 398.772C164.163 396.947 168.111 406.569 169.181 408.769C170.06 410.576 172.099 413.376 171.604 415.53C170.94 418.432 166.846 419.46 164.703 420.957C159.4 424.663 159.442 432.446 167.122 429.148C171.468 427.281 176.849 422.104 180.18 427.982C181.718 430.694 185.362 445.846 189.168 435.937C191.523 429.802 180.188 423.428 185.776 418.238C187.575 416.568 189.681 416.427 191.478 415.467C195.818 413.148 193.371 408.863 191.957 405.36Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M861.644 185.82C858.921 184.824 855.552 182.879 852.525 183.542C849.308 184.246 848.013 187.468 845.674 189.405C839.315 194.672 835.611 186.822 832.117 182.52C828.817 178.458 824.791 177.472 820.135 179.968C818.28 180.963 810.465 185.522 811.828 188.443C812.808 190.545 816.669 188.658 817.986 188.199C820.845 187.204 823.5 186.333 826.424 187.784C831.909 190.504 833.332 197.963 839.968 199.126C846.83 200.329 847.055 193.799 851.952 191.341C855.235 189.694 857.522 192.61 860.689 192.029C863.707 191.476 865.103 187.084 861.644 185.82Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M806.244 212.137C808.671 212.664 810.255 207.957 811.774 206.763C814.294 204.784 818.663 204.385 821.229 206.377C826.24 210.265 824.513 218.659 831.648 220.847C838.025 222.803 841.029 214.404 846.397 212.313C849.518 211.097 852.944 210.301 851.726 205.938C850.885 202.921 848.407 202.146 845.713 203.305C841.083 205.295 839.511 213.402 834.022 213.547C828.343 213.697 827.727 205.51 825.289 201.944C821.572 196.509 813.931 195.196 809.589 200.393C808.278 201.961 801.622 211.136 806.244 212.137Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M693.987 119.326C697.363 121.636 704.091 121.556 707.201 118.691C710.366 115.776 706.141 115.328 703.563 115.417C701.58 115.486 697.868 116.469 698.998 113.044C700.001 110.005 705.514 111.552 705.974 108.216C701.825 107.472 697.255 107.74 694.186 111.001C691.967 113.358 690.827 117.163 693.987 119.326Z"
        fill={theme.palette.text.primary}
      />
    </svg>
  );
}
