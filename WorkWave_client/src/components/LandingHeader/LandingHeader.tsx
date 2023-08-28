import Buttons from "../Buttons";
function LandingHeader() {
  return (
    <div className="flex justify-end items-center pt-10 pr-72 ">
      <div className="flex ">
        <div className=" pl-8 border-e-2">
          <svg
            width="138"
            height="71"
            viewBox="0 0 138 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M37.8623 64V53.8182H41.4915C42.2837 53.8182 42.9399 53.9624 43.4603 54.2507C43.9807 54.5391 44.3701 54.9335 44.6286 55.4339C44.8871 55.9311 45.0164 56.4912 45.0164 57.1143C45.0164 57.7408 44.8855 58.3042 44.6237 58.8047C44.3651 59.3018 43.974 59.6963 43.4504 59.9879C42.93 60.2763 42.2754 60.4205 41.4866 60.4205H38.9908V59.1179H41.3474C41.8478 59.1179 42.2539 59.0317 42.5654 58.8594C42.877 58.6837 43.1057 58.4451 43.2515 58.1435C43.3973 57.8419 43.4702 57.4988 43.4702 57.1143C43.4702 56.7299 43.3973 56.3885 43.2515 56.0902C43.1057 55.7919 42.8753 55.5582 42.5604 55.3892C42.2489 55.2202 41.8379 55.1357 41.3275 55.1357H39.3985V64H37.8623ZM50.1735 64.1541C49.4212 64.1541 48.7732 63.9934 48.2296 63.6719C47.6894 63.3471 47.2718 62.8913 46.9768 62.3047C46.6851 61.7147 46.5393 61.0237 46.5393 60.2315C46.5393 59.4493 46.6851 58.7599 46.9768 58.1634C47.2718 57.5668 47.6828 57.1011 48.2098 56.7663C48.7401 56.4316 49.3599 56.2642 50.0691 56.2642C50.5 56.2642 50.9176 56.3355 51.322 56.478C51.7263 56.6205 52.0893 56.8442 52.4108 57.1491C52.7322 57.4541 52.9858 57.8501 53.1714 58.3374C53.357 58.8213 53.4498 59.4096 53.4498 60.1023V60.6293H47.3795V59.5156H51.9931C51.9931 59.1245 51.9136 58.7782 51.7545 58.4766C51.5954 58.1716 51.3717 57.9313 51.0833 57.7557C50.7983 57.58 50.4635 57.4922 50.0791 57.4922C49.6615 57.4922 49.2969 57.5949 48.9853 57.8004C48.6771 58.0026 48.4385 58.2678 48.2694 58.5959C48.1037 58.9207 48.0208 59.2737 48.0208 59.6548V60.5249C48.0208 61.0353 48.1103 61.4695 48.2893 61.8274C48.4716 62.1854 48.7251 62.4588 49.05 62.6477C49.3748 62.8333 49.7543 62.9261 50.1885 62.9261C50.4702 62.9261 50.727 62.8864 50.959 62.8068C51.1911 62.724 51.3916 62.6013 51.5606 62.4389C51.7296 62.2765 51.8589 62.076 51.9484 61.8374L53.3554 62.0909C53.2427 62.5052 53.0405 62.8681 52.7488 63.1797C52.4605 63.4879 52.0975 63.7282 51.66 63.9006C51.2259 64.0696 50.7304 64.1541 50.1735 64.1541ZM55.3791 64V56.3636H56.8159V57.5767H56.8955C57.0347 57.1657 57.2799 56.8426 57.6313 56.6072C57.9859 56.3686 58.387 56.2493 58.8344 56.2493C58.9272 56.2493 59.0366 56.2526 59.1625 56.2592C59.2918 56.2659 59.3929 56.2741 59.4658 56.2841V57.706C59.4061 57.6894 59.3001 57.6712 59.1476 57.6513C58.9951 57.6281 58.8427 57.6165 58.6902 57.6165C58.3389 57.6165 58.0257 57.6911 57.7506 57.8402C57.4788 57.986 57.2634 58.1899 57.1043 58.4517C56.9452 58.7102 56.8656 59.0052 56.8656 59.3366V64H55.3791ZM66.7545 58.228L65.4072 58.4666C65.3508 58.2943 65.2614 58.1302 65.1387 57.9744C65.0194 57.8187 64.857 57.6911 64.6515 57.5916C64.446 57.4922 64.1891 57.4425 63.8809 57.4425C63.46 57.4425 63.1087 57.5369 62.8269 57.7259C62.5452 57.9115 62.4043 58.1518 62.4043 58.4467C62.4043 58.7019 62.4988 58.9074 62.6877 59.0632C62.8766 59.219 63.1816 59.3466 63.6025 59.446L64.8156 59.7244C65.5182 59.8868 66.0419 60.1371 66.3866 60.4751C66.7313 60.8132 66.9036 61.2524 66.9036 61.7926C66.9036 62.25 66.7711 62.6577 66.5059 63.0156C66.2441 63.3703 65.8778 63.6487 65.4072 63.8509C64.9399 64.053 64.398 64.1541 63.7815 64.1541C62.9264 64.1541 62.2287 63.9718 61.6884 63.6072C61.1482 63.2393 60.8168 62.7173 60.6941 62.0412L62.1309 61.8224C62.2204 62.197 62.4043 62.4804 62.6828 62.6726C62.9612 62.8615 63.3241 62.956 63.7715 62.956C64.2588 62.956 64.6482 62.8549 64.9399 62.6527C65.2315 62.4472 65.3774 62.197 65.3774 61.902C65.3774 61.6634 65.2879 61.4628 65.1089 61.3004C64.9332 61.138 64.6631 61.0154 64.2985 60.9325L63.0059 60.6491C62.2933 60.4867 61.7663 60.2282 61.4249 59.8736C61.0869 59.5189 60.9178 59.0698 60.9178 58.5263C60.9178 58.0755 61.0438 57.6811 61.2957 57.343C61.5476 57.005 61.8956 56.7415 62.3397 56.5526C62.7838 56.3603 63.2926 56.2642 63.866 56.2642C64.6913 56.2642 65.3409 56.4432 65.8149 56.8011C66.2888 57.1558 66.602 57.6314 66.7545 58.228ZM72.0347 64.1541C71.3188 64.1541 70.694 63.9901 70.1604 63.6619C69.6268 63.3338 69.2125 62.8748 68.9175 62.2848C68.6225 61.6948 68.475 61.0054 68.475 60.2166C68.475 59.4245 68.6225 58.7318 68.9175 58.1385C69.2125 57.5452 69.6268 57.0845 70.1604 56.7564C70.694 56.4283 71.3188 56.2642 72.0347 56.2642C72.7506 56.2642 73.3753 56.4283 73.909 56.7564C74.4426 57.0845 74.8569 57.5452 75.1519 58.1385C75.4468 58.7318 75.5943 59.4245 75.5943 60.2166C75.5943 61.0054 75.4468 61.6948 75.1519 62.2848C74.8569 62.8748 74.4426 63.3338 73.909 63.6619C73.3753 63.9901 72.7506 64.1541 72.0347 64.1541ZM72.0396 62.9062C72.5037 62.9062 72.8881 62.7836 73.193 62.5384C73.498 62.2931 73.7233 61.9666 73.8692 61.5589C74.0183 61.1513 74.0929 60.7022 74.0929 60.2116C74.0929 59.7244 74.0183 59.277 73.8692 58.8693C73.7233 58.4583 73.498 58.1286 73.193 57.88C72.8881 57.6314 72.5037 57.5071 72.0396 57.5071C71.5723 57.5071 71.1845 57.6314 70.8763 57.88C70.5714 58.1286 70.3443 58.4583 70.1952 58.8693C70.0493 59.277 69.9764 59.7244 69.9764 60.2116C69.9764 60.7022 70.0493 61.1513 70.1952 61.5589C70.3443 61.9666 70.5714 62.2931 70.8763 62.5384C71.1845 62.7836 71.5723 62.9062 72.0396 62.9062ZM79.0201 59.4659V64H77.5336V56.3636H78.9604V57.6065H79.0549C79.2306 57.2022 79.5057 56.8774 79.8802 56.6321C80.258 56.3868 80.7336 56.2642 81.307 56.2642C81.8274 56.2642 82.2831 56.3736 82.6742 56.5923C83.0653 56.8078 83.3686 57.1293 83.584 57.5568C83.7995 57.9844 83.9072 58.513 83.9072 59.1428V64H82.4207V59.3217C82.4207 58.7682 82.2765 58.3357 81.9881 58.0241C81.6998 57.7093 81.3037 57.5518 80.7999 57.5518C80.4552 57.5518 80.1486 57.6264 79.8802 57.7756C79.615 57.9247 79.4046 58.1435 79.2488 58.4318C79.0963 58.7169 79.0201 59.0616 79.0201 59.4659ZM88.4031 64.169C87.9192 64.169 87.4817 64.0795 87.0906 63.9006C86.6995 63.7183 86.3896 63.4548 86.1609 63.1101C85.9355 62.7654 85.8228 62.3428 85.8228 61.8423C85.8228 61.4115 85.9057 61.0568 86.0714 60.7784C86.2371 60.5 86.4608 60.2796 86.7426 60.1172C87.0243 59.9548 87.3392 59.8321 87.6872 59.7493C88.0352 59.6664 88.3898 59.6035 88.7511 59.5604C89.2085 59.5073 89.5797 59.4643 89.8647 59.4311C90.1498 59.3946 90.3569 59.3366 90.4862 59.2571C90.6154 59.1776 90.6801 59.0483 90.6801 58.8693V58.8345C90.6801 58.4003 90.5574 58.0639 90.3122 57.8253C90.0702 57.5866 89.709 57.4673 89.2284 57.4673C88.7279 57.4673 88.3335 57.5784 88.0451 57.8004C87.7601 58.0192 87.5629 58.2628 87.4535 58.5312L86.0565 58.2131C86.2222 57.7491 86.4642 57.3745 86.7823 57.0895C87.1038 56.8011 87.4734 56.5923 87.891 56.4631C88.3086 56.3305 88.7478 56.2642 89.2085 56.2642C89.5134 56.2642 89.8366 56.3007 90.1779 56.3736C90.5226 56.4432 90.8441 56.5724 91.1424 56.7614C91.444 56.9503 91.691 57.2204 91.8832 57.5717C92.0754 57.9197 92.1715 58.3722 92.1715 58.929V64H90.7198V62.956H90.6602C90.5641 63.1482 90.4199 63.3371 90.2277 63.5227C90.0354 63.7083 89.7885 63.8625 89.4869 63.9851C89.1853 64.1077 88.824 64.169 88.4031 64.169ZM88.7262 62.9759C89.1372 62.9759 89.4885 62.8946 89.7802 62.7322C90.0752 62.5698 90.2989 62.3577 90.4514 62.0959C90.6072 61.8307 90.685 61.5473 90.685 61.2457V60.2614C90.632 60.3144 90.5293 60.3641 90.3768 60.4105C90.2277 60.4536 90.057 60.4917 89.8647 60.5249C89.6725 60.5547 89.4852 60.5829 89.3029 60.6094C89.1206 60.6326 88.9682 60.6525 88.8456 60.669C88.5572 60.7055 88.2937 60.7668 88.0551 60.853C87.8197 60.9392 87.6308 61.0634 87.4883 61.2259C87.3491 61.3849 87.2795 61.5971 87.2795 61.8622C87.2795 62.2301 87.4154 62.5085 87.6872 62.6974C87.959 62.883 88.3053 62.9759 88.7262 62.9759ZM100.154 58.228L98.8065 58.4666C98.7501 58.2943 98.6606 58.1302 98.538 57.9744C98.4187 57.8187 98.2563 57.6911 98.0508 57.5916C97.8453 57.4922 97.5884 57.4425 97.2802 57.4425C96.8593 57.4425 96.5079 57.5369 96.2262 57.7259C95.9445 57.9115 95.8036 58.1518 95.8036 58.4467C95.8036 58.7019 95.8981 58.9074 96.087 59.0632C96.2759 59.219 96.5809 59.3466 97.0018 59.446L98.2149 59.7244C98.9175 59.8868 99.4412 60.1371 99.7859 60.4751C100.131 60.8132 100.303 61.2524 100.303 61.7926C100.303 62.25 100.17 62.6577 99.9052 63.0156C99.6434 63.3703 99.2771 63.6487 98.8065 63.8509C98.3392 64.053 97.7972 64.1541 97.1808 64.1541C96.3257 64.1541 95.628 63.9718 95.0877 63.6072C94.5475 63.2393 94.216 62.7173 94.0934 62.0412L95.5302 61.8224C95.6197 62.197 95.8036 62.4804 96.082 62.6726C96.3605 62.8615 96.7234 62.956 97.1708 62.956C97.658 62.956 98.0475 62.8549 98.3392 62.6527C98.6308 62.4472 98.7767 62.197 98.7767 61.902C98.7767 61.6634 98.6872 61.4628 98.5082 61.3004C98.3325 61.138 98.0624 61.0154 97.6978 60.9325L96.4052 60.6491C95.6926 60.4867 95.1656 60.2282 94.8242 59.8736C94.4862 59.5189 94.3171 59.0698 94.3171 58.5263C94.3171 58.0755 94.4431 57.6811 94.695 57.343C94.9469 57.005 95.2949 56.7415 95.739 56.5526C96.1831 56.3603 96.6919 56.2642 97.2653 56.2642C98.0906 56.2642 98.7402 56.4432 99.2142 56.8011C99.6881 57.1558 100.001 57.6314 100.154 58.228Z"
              fill="#F5F5F5"
            />
            <mask
              id="mask0_102_235"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="45"
              y="0"
              width="48"
              height="48"
            >
              <rect x="45" width="48" height="48" fill="url(#pattern0)" />
            </mask>
            <g mask="url(#mask0_102_235)">
              <rect x="45" width="48" height="48" fill="#F5F5F5" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_102_235" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_102_235"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMElEQVR4nO2cTYsdRRSGn0lINgl+YRJxlTjqJhuTiIJGYtyIK+MkjqAgiMQ/EAU1oCYiqCOIuNaFjgFdxbWJg6ARv3bBmfFzowuNKE5EM0IsKTgXZpJ7u6vura6uvnkfOJue29XnPafrVHVV94AQQgghhBBCCCGEEEIIIUQ5TAC7gKPAHLAA/GU2b8eOADvbdnQcAz8NLAIu0HxyDti5YgQmgc8iAn+hfQpsUwaGYzfwywjB79lvwF1KQhx7gX8TBL9ny8AeJSGMbcCvCYO/sidcryRUMzFiza+zUxqYq3mgweD3bL96weC7fzFDAvwzg+jDzRmC37MdysDFPJ8xAc8pARczlzEBJ7uegPU2YB67YE1mwY5N229iWMyYgIUC9A6Nn0V8HyDyO2Aqot2ljAlYKkBvNGuBV4YQOwOs6WAC1jasN5phnOnZS4WVoPkC9EaxP4HofTXX+LCgQTiH3mDWW30b1aEfagaqIxkT8EwBeltZHri/4jo7MybgpgL0BnMsoUOzNUsRCxmC/3UheoP5JuP8+0CGBNxXkN4gljJO/yZsG7Gp4H8csBydU28QZxM69GfA9bY2uCEzWaDerPPz0C65x7YRU13Xt3VHwXqzDUpvR1z39oSb8ns7oHcg0wkd8oNs7P7wqRFr/tYO6W30weRbYN0Q15+wJ9P5yKnmVEf19mUqgUP3JvBjh22mnLSEnDWbt2PP1jxkdU3vKmZGcOZFusdMaXr9EuvLQ64MNrI82zDF6t1n9S2kBibvhi1QpN51ttA026cWz9ron2wAKoBLTa8QQgjB1cCdwEGbl78PfGmviZwBzpmdsWP+b8fttwdtUc+3IQK51mYbr1kw/0vwROosOW8BjwHb9Yr6arbb8kLMWs+o9qMl2X8GdUmyBTgMnM4Y9EF22nzZTEe4BngIeBW4JfLc64A3rW67wsz79MYQX1XearF40G6sRvB3x+O2Nn/eHPaDXSiXA68n3uVyDdmylafLIvQdt3N9bD4BDgGbSMAu2yFa7rPZHNpl7wF+LiCwLtJ+Au4O1Li5z16y71HvDPvl/o3AexWzkNB3H59e0WO6aOeBJwO1Dlo59TF8F7ghpJE1VmqqavS5wFr3QgEBdInMf71Tx5aaEvuPlaaBS9VXBL4g+0GAM48UEDSX2B4O0H0ioJ0TNiau4irgi0BHDgXcCX8UEDCX2H4PGPeeCGzrc+DKlR8ifBThyG01ThwuIFiuIXuqRvvuiLbmLPY8GumEn8tX8VUBgXINma8SVUxGtudLdfS/BthQ48Q4lh9n5rVVsTGyPf8eLH9HnlSHG3OrI6YtH/tWHXAdtNT6W3fAdcyUAJQA9YAKVIJQCWq9TjuNAe0HymkQbj9YTrOg8bM6ottr2wHXMVMCUALUAypQCaJjJUgIIYQQQgghhBBCCCGEEIw1/wM0UiIvl4A7TAAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </div>
        <div className=" pl-8 border-e-2 ">
          <svg
            width="138"
            height="71"
            viewBox="0 0 138 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M37.8623 64V53.8182H41.4915C42.2837 53.8182 42.9399 53.9624 43.4603 54.2507C43.9807 54.5391 44.3701 54.9335 44.6286 55.4339C44.8871 55.9311 45.0164 56.4912 45.0164 57.1143C45.0164 57.7408 44.8855 58.3042 44.6237 58.8047C44.3651 59.3018 43.974 59.6963 43.4504 59.9879C42.93 60.2763 42.2754 60.4205 41.4866 60.4205H38.9908V59.1179H41.3474C41.8478 59.1179 42.2539 59.0317 42.5654 58.8594C42.877 58.6837 43.1057 58.4451 43.2515 58.1435C43.3973 57.8419 43.4702 57.4988 43.4702 57.1143C43.4702 56.7299 43.3973 56.3885 43.2515 56.0902C43.1057 55.7919 42.8753 55.5582 42.5604 55.3892C42.2489 55.2202 41.8379 55.1357 41.3275 55.1357H39.3985V64H37.8623ZM50.1735 64.1541C49.4212 64.1541 48.7732 63.9934 48.2296 63.6719C47.6894 63.3471 47.2718 62.8913 46.9768 62.3047C46.6851 61.7147 46.5393 61.0237 46.5393 60.2315C46.5393 59.4493 46.6851 58.7599 46.9768 58.1634C47.2718 57.5668 47.6828 57.1011 48.2098 56.7663C48.7401 56.4316 49.3599 56.2642 50.0691 56.2642C50.5 56.2642 50.9176 56.3355 51.322 56.478C51.7263 56.6205 52.0893 56.8442 52.4108 57.1491C52.7322 57.4541 52.9858 57.8501 53.1714 58.3374C53.357 58.8213 53.4498 59.4096 53.4498 60.1023V60.6293H47.3795V59.5156H51.9931C51.9931 59.1245 51.9136 58.7782 51.7545 58.4766C51.5954 58.1716 51.3717 57.9313 51.0833 57.7557C50.7983 57.58 50.4635 57.4922 50.0791 57.4922C49.6615 57.4922 49.2969 57.5949 48.9853 57.8004C48.6771 58.0026 48.4385 58.2678 48.2694 58.5959C48.1037 58.9207 48.0208 59.2737 48.0208 59.6548V60.5249C48.0208 61.0353 48.1103 61.4695 48.2893 61.8274C48.4716 62.1854 48.7251 62.4588 49.05 62.6477C49.3748 62.8333 49.7543 62.9261 50.1885 62.9261C50.4702 62.9261 50.727 62.8864 50.959 62.8068C51.1911 62.724 51.3916 62.6013 51.5606 62.4389C51.7296 62.2765 51.8589 62.076 51.9484 61.8374L53.3554 62.0909C53.2427 62.5052 53.0405 62.8681 52.7488 63.1797C52.4605 63.4879 52.0975 63.7282 51.66 63.9006C51.2259 64.0696 50.7304 64.1541 50.1735 64.1541ZM55.3791 64V56.3636H56.8159V57.5767H56.8955C57.0347 57.1657 57.2799 56.8426 57.6313 56.6072C57.9859 56.3686 58.387 56.2493 58.8344 56.2493C58.9272 56.2493 59.0366 56.2526 59.1625 56.2592C59.2918 56.2659 59.3929 56.2741 59.4658 56.2841V57.706C59.4061 57.6894 59.3001 57.6712 59.1476 57.6513C58.9951 57.6281 58.8427 57.6165 58.6902 57.6165C58.3389 57.6165 58.0257 57.6911 57.7506 57.8402C57.4788 57.986 57.2634 58.1899 57.1043 58.4517C56.9452 58.7102 56.8656 59.0052 56.8656 59.3366V64H55.3791ZM66.7545 58.228L65.4072 58.4666C65.3508 58.2943 65.2614 58.1302 65.1387 57.9744C65.0194 57.8187 64.857 57.6911 64.6515 57.5916C64.446 57.4922 64.1891 57.4425 63.8809 57.4425C63.46 57.4425 63.1087 57.5369 62.8269 57.7259C62.5452 57.9115 62.4043 58.1518 62.4043 58.4467C62.4043 58.7019 62.4988 58.9074 62.6877 59.0632C62.8766 59.219 63.1816 59.3466 63.6025 59.446L64.8156 59.7244C65.5182 59.8868 66.0419 60.1371 66.3866 60.4751C66.7313 60.8132 66.9036 61.2524 66.9036 61.7926C66.9036 62.25 66.7711 62.6577 66.5059 63.0156C66.2441 63.3703 65.8778 63.6487 65.4072 63.8509C64.9399 64.053 64.398 64.1541 63.7815 64.1541C62.9264 64.1541 62.2287 63.9718 61.6884 63.6072C61.1482 63.2393 60.8168 62.7173 60.6941 62.0412L62.1309 61.8224C62.2204 62.197 62.4043 62.4804 62.6828 62.6726C62.9612 62.8615 63.3241 62.956 63.7715 62.956C64.2588 62.956 64.6482 62.8549 64.9399 62.6527C65.2315 62.4472 65.3774 62.197 65.3774 61.902C65.3774 61.6634 65.2879 61.4628 65.1089 61.3004C64.9332 61.138 64.6631 61.0154 64.2985 60.9325L63.0059 60.6491C62.2933 60.4867 61.7663 60.2282 61.4249 59.8736C61.0869 59.5189 60.9178 59.0698 60.9178 58.5263C60.9178 58.0755 61.0438 57.6811 61.2957 57.343C61.5476 57.005 61.8956 56.7415 62.3397 56.5526C62.7838 56.3603 63.2926 56.2642 63.866 56.2642C64.6913 56.2642 65.3409 56.4432 65.8149 56.8011C66.2888 57.1558 66.602 57.6314 66.7545 58.228ZM72.0347 64.1541C71.3188 64.1541 70.694 63.9901 70.1604 63.6619C69.6268 63.3338 69.2125 62.8748 68.9175 62.2848C68.6225 61.6948 68.475 61.0054 68.475 60.2166C68.475 59.4245 68.6225 58.7318 68.9175 58.1385C69.2125 57.5452 69.6268 57.0845 70.1604 56.7564C70.694 56.4283 71.3188 56.2642 72.0347 56.2642C72.7506 56.2642 73.3753 56.4283 73.909 56.7564C74.4426 57.0845 74.8569 57.5452 75.1519 58.1385C75.4468 58.7318 75.5943 59.4245 75.5943 60.2166C75.5943 61.0054 75.4468 61.6948 75.1519 62.2848C74.8569 62.8748 74.4426 63.3338 73.909 63.6619C73.3753 63.9901 72.7506 64.1541 72.0347 64.1541ZM72.0396 62.9062C72.5037 62.9062 72.8881 62.7836 73.193 62.5384C73.498 62.2931 73.7233 61.9666 73.8692 61.5589C74.0183 61.1513 74.0929 60.7022 74.0929 60.2116C74.0929 59.7244 74.0183 59.277 73.8692 58.8693C73.7233 58.4583 73.498 58.1286 73.193 57.88C72.8881 57.6314 72.5037 57.5071 72.0396 57.5071C71.5723 57.5071 71.1845 57.6314 70.8763 57.88C70.5714 58.1286 70.3443 58.4583 70.1952 58.8693C70.0493 59.277 69.9764 59.7244 69.9764 60.2116C69.9764 60.7022 70.0493 61.1513 70.1952 61.5589C70.3443 61.9666 70.5714 62.2931 70.8763 62.5384C71.1845 62.7836 71.5723 62.9062 72.0396 62.9062ZM79.0201 59.4659V64H77.5336V56.3636H78.9604V57.6065H79.0549C79.2306 57.2022 79.5057 56.8774 79.8802 56.6321C80.258 56.3868 80.7336 56.2642 81.307 56.2642C81.8274 56.2642 82.2831 56.3736 82.6742 56.5923C83.0653 56.8078 83.3686 57.1293 83.584 57.5568C83.7995 57.9844 83.9072 58.513 83.9072 59.1428V64H82.4207V59.3217C82.4207 58.7682 82.2765 58.3357 81.9881 58.0241C81.6998 57.7093 81.3037 57.5518 80.7999 57.5518C80.4552 57.5518 80.1486 57.6264 79.8802 57.7756C79.615 57.9247 79.4046 58.1435 79.2488 58.4318C79.0963 58.7169 79.0201 59.0616 79.0201 59.4659ZM88.4031 64.169C87.9192 64.169 87.4817 64.0795 87.0906 63.9006C86.6995 63.7183 86.3896 63.4548 86.1609 63.1101C85.9355 62.7654 85.8228 62.3428 85.8228 61.8423C85.8228 61.4115 85.9057 61.0568 86.0714 60.7784C86.2371 60.5 86.4608 60.2796 86.7426 60.1172C87.0243 59.9548 87.3392 59.8321 87.6872 59.7493C88.0352 59.6664 88.3898 59.6035 88.7511 59.5604C89.2085 59.5073 89.5797 59.4643 89.8647 59.4311C90.1498 59.3946 90.3569 59.3366 90.4862 59.2571C90.6154 59.1776 90.6801 59.0483 90.6801 58.8693V58.8345C90.6801 58.4003 90.5574 58.0639 90.3122 57.8253C90.0702 57.5866 89.709 57.4673 89.2284 57.4673C88.7279 57.4673 88.3335 57.5784 88.0451 57.8004C87.7601 58.0192 87.5629 58.2628 87.4535 58.5312L86.0565 58.2131C86.2222 57.7491 86.4642 57.3745 86.7823 57.0895C87.1038 56.8011 87.4734 56.5923 87.891 56.4631C88.3086 56.3305 88.7478 56.2642 89.2085 56.2642C89.5134 56.2642 89.8366 56.3007 90.1779 56.3736C90.5226 56.4432 90.8441 56.5724 91.1424 56.7614C91.444 56.9503 91.691 57.2204 91.8832 57.5717C92.0754 57.9197 92.1715 58.3722 92.1715 58.929V64H90.7198V62.956H90.6602C90.5641 63.1482 90.4199 63.3371 90.2277 63.5227C90.0354 63.7083 89.7885 63.8625 89.4869 63.9851C89.1853 64.1077 88.824 64.169 88.4031 64.169ZM88.7262 62.9759C89.1372 62.9759 89.4885 62.8946 89.7802 62.7322C90.0752 62.5698 90.2989 62.3577 90.4514 62.0959C90.6072 61.8307 90.685 61.5473 90.685 61.2457V60.2614C90.632 60.3144 90.5293 60.3641 90.3768 60.4105C90.2277 60.4536 90.057 60.4917 89.8647 60.5249C89.6725 60.5547 89.4852 60.5829 89.3029 60.6094C89.1206 60.6326 88.9682 60.6525 88.8456 60.669C88.5572 60.7055 88.2937 60.7668 88.0551 60.853C87.8197 60.9392 87.6308 61.0634 87.4883 61.2259C87.3491 61.3849 87.2795 61.5971 87.2795 61.8622C87.2795 62.2301 87.4154 62.5085 87.6872 62.6974C87.959 62.883 88.3053 62.9759 88.7262 62.9759ZM100.154 58.228L98.8065 58.4666C98.7501 58.2943 98.6606 58.1302 98.538 57.9744C98.4187 57.8187 98.2563 57.6911 98.0508 57.5916C97.8453 57.4922 97.5884 57.4425 97.2802 57.4425C96.8593 57.4425 96.5079 57.5369 96.2262 57.7259C95.9445 57.9115 95.8036 58.1518 95.8036 58.4467C95.8036 58.7019 95.8981 58.9074 96.087 59.0632C96.2759 59.219 96.5809 59.3466 97.0018 59.446L98.2149 59.7244C98.9175 59.8868 99.4412 60.1371 99.7859 60.4751C100.131 60.8132 100.303 61.2524 100.303 61.7926C100.303 62.25 100.17 62.6577 99.9052 63.0156C99.6434 63.3703 99.2771 63.6487 98.8065 63.8509C98.3392 64.053 97.7972 64.1541 97.1808 64.1541C96.3257 64.1541 95.628 63.9718 95.0877 63.6072C94.5475 63.2393 94.216 62.7173 94.0934 62.0412L95.5302 61.8224C95.6197 62.197 95.8036 62.4804 96.082 62.6726C96.3605 62.8615 96.7234 62.956 97.1708 62.956C97.658 62.956 98.0475 62.8549 98.3392 62.6527C98.6308 62.4472 98.7767 62.197 98.7767 61.902C98.7767 61.6634 98.6872 61.4628 98.5082 61.3004C98.3325 61.138 98.0624 61.0154 97.6978 60.9325L96.4052 60.6491C95.6926 60.4867 95.1656 60.2282 94.8242 59.8736C94.4862 59.5189 94.3171 59.0698 94.3171 58.5263C94.3171 58.0755 94.4431 57.6811 94.695 57.343C94.9469 57.005 95.2949 56.7415 95.739 56.5526C96.1831 56.3603 96.6919 56.2642 97.2653 56.2642C98.0906 56.2642 98.7402 56.4432 99.2142 56.8011C99.6881 57.1558 100.001 57.6314 100.154 58.228Z"
              fill="#F5F5F5"
            />
            <mask
              id="mask0_102_235"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="45"
              y="0"
              width="48"
              height="48"
            >
              <rect x="45" width="48" height="48" fill="url(#pattern0)" />
            </mask>
            <g mask="url(#mask0_102_235)">
              <rect x="45" width="48" height="48" fill="#F5F5F5" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_102_235" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_102_235"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMElEQVR4nO2cTYsdRRSGn0lINgl+YRJxlTjqJhuTiIJGYtyIK+MkjqAgiMQ/EAU1oCYiqCOIuNaFjgFdxbWJg6ARv3bBmfFzowuNKE5EM0IsKTgXZpJ7u6vura6uvnkfOJue29XnPafrVHVV94AQQgghhBBCCCGEEEIIIUQ5TAC7gKPAHLAA/GU2b8eOADvbdnQcAz8NLAIu0HxyDti5YgQmgc8iAn+hfQpsUwaGYzfwywjB79lvwF1KQhx7gX8TBL9ny8AeJSGMbcCvCYO/sidcryRUMzFiza+zUxqYq3mgweD3bL96weC7fzFDAvwzg+jDzRmC37MdysDFPJ8xAc8pARczlzEBJ7uegPU2YB67YE1mwY5N229iWMyYgIUC9A6Nn0V8HyDyO2Aqot2ljAlYKkBvNGuBV4YQOwOs6WAC1jasN5phnOnZS4WVoPkC9EaxP4HofTXX+LCgQTiH3mDWW30b1aEfagaqIxkT8EwBeltZHri/4jo7MybgpgL0BnMsoUOzNUsRCxmC/3UheoP5JuP8+0CGBNxXkN4gljJO/yZsG7Gp4H8csBydU28QZxM69GfA9bY2uCEzWaDerPPz0C65x7YRU13Xt3VHwXqzDUpvR1z39oSb8ns7oHcg0wkd8oNs7P7wqRFr/tYO6W30weRbYN0Q15+wJ9P5yKnmVEf19mUqgUP3JvBjh22mnLSEnDWbt2PP1jxkdU3vKmZGcOZFusdMaXr9EuvLQ64MNrI82zDF6t1n9S2kBibvhi1QpN51ttA026cWz9ron2wAKoBLTa8QQgjB1cCdwEGbl78PfGmviZwBzpmdsWP+b8fttwdtUc+3IQK51mYbr1kw/0vwROosOW8BjwHb9Yr6arbb8kLMWs+o9qMl2X8GdUmyBTgMnM4Y9EF22nzZTEe4BngIeBW4JfLc64A3rW67wsz79MYQX1XearF40G6sRvB3x+O2Nn/eHPaDXSiXA68n3uVyDdmylafLIvQdt3N9bD4BDgGbSMAu2yFa7rPZHNpl7wF+LiCwLtJ+Au4O1Li5z16y71HvDPvl/o3AexWzkNB3H59e0WO6aOeBJwO1Dlo59TF8F7ghpJE1VmqqavS5wFr3QgEBdInMf71Tx5aaEvuPlaaBS9VXBL4g+0GAM48UEDSX2B4O0H0ioJ0TNiau4irgi0BHDgXcCX8UEDCX2H4PGPeeCGzrc+DKlR8ifBThyG01ThwuIFiuIXuqRvvuiLbmLPY8GumEn8tX8VUBgXINma8SVUxGtudLdfS/BthQ48Q4lh9n5rVVsTGyPf8eLH9HnlSHG3OrI6YtH/tWHXAdtNT6W3fAdcyUAJQA9YAKVIJQCWq9TjuNAe0HymkQbj9YTrOg8bM6ottr2wHXMVMCUALUAypQCaJjJUgIIYQQQgghhBBCCCGEEIw1/wM0UiIvl4A7TAAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </div>
        <div className="pl-8 border-e-2 ">
          <svg
            width="138"
            height="71"
            viewBox="0 0 138 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M37.8623 64V53.8182H41.4915C42.2837 53.8182 42.9399 53.9624 43.4603 54.2507C43.9807 54.5391 44.3701 54.9335 44.6286 55.4339C44.8871 55.9311 45.0164 56.4912 45.0164 57.1143C45.0164 57.7408 44.8855 58.3042 44.6237 58.8047C44.3651 59.3018 43.974 59.6963 43.4504 59.9879C42.93 60.2763 42.2754 60.4205 41.4866 60.4205H38.9908V59.1179H41.3474C41.8478 59.1179 42.2539 59.0317 42.5654 58.8594C42.877 58.6837 43.1057 58.4451 43.2515 58.1435C43.3973 57.8419 43.4702 57.4988 43.4702 57.1143C43.4702 56.7299 43.3973 56.3885 43.2515 56.0902C43.1057 55.7919 42.8753 55.5582 42.5604 55.3892C42.2489 55.2202 41.8379 55.1357 41.3275 55.1357H39.3985V64H37.8623ZM50.1735 64.1541C49.4212 64.1541 48.7732 63.9934 48.2296 63.6719C47.6894 63.3471 47.2718 62.8913 46.9768 62.3047C46.6851 61.7147 46.5393 61.0237 46.5393 60.2315C46.5393 59.4493 46.6851 58.7599 46.9768 58.1634C47.2718 57.5668 47.6828 57.1011 48.2098 56.7663C48.7401 56.4316 49.3599 56.2642 50.0691 56.2642C50.5 56.2642 50.9176 56.3355 51.322 56.478C51.7263 56.6205 52.0893 56.8442 52.4108 57.1491C52.7322 57.4541 52.9858 57.8501 53.1714 58.3374C53.357 58.8213 53.4498 59.4096 53.4498 60.1023V60.6293H47.3795V59.5156H51.9931C51.9931 59.1245 51.9136 58.7782 51.7545 58.4766C51.5954 58.1716 51.3717 57.9313 51.0833 57.7557C50.7983 57.58 50.4635 57.4922 50.0791 57.4922C49.6615 57.4922 49.2969 57.5949 48.9853 57.8004C48.6771 58.0026 48.4385 58.2678 48.2694 58.5959C48.1037 58.9207 48.0208 59.2737 48.0208 59.6548V60.5249C48.0208 61.0353 48.1103 61.4695 48.2893 61.8274C48.4716 62.1854 48.7251 62.4588 49.05 62.6477C49.3748 62.8333 49.7543 62.9261 50.1885 62.9261C50.4702 62.9261 50.727 62.8864 50.959 62.8068C51.1911 62.724 51.3916 62.6013 51.5606 62.4389C51.7296 62.2765 51.8589 62.076 51.9484 61.8374L53.3554 62.0909C53.2427 62.5052 53.0405 62.8681 52.7488 63.1797C52.4605 63.4879 52.0975 63.7282 51.66 63.9006C51.2259 64.0696 50.7304 64.1541 50.1735 64.1541ZM55.3791 64V56.3636H56.8159V57.5767H56.8955C57.0347 57.1657 57.2799 56.8426 57.6313 56.6072C57.9859 56.3686 58.387 56.2493 58.8344 56.2493C58.9272 56.2493 59.0366 56.2526 59.1625 56.2592C59.2918 56.2659 59.3929 56.2741 59.4658 56.2841V57.706C59.4061 57.6894 59.3001 57.6712 59.1476 57.6513C58.9951 57.6281 58.8427 57.6165 58.6902 57.6165C58.3389 57.6165 58.0257 57.6911 57.7506 57.8402C57.4788 57.986 57.2634 58.1899 57.1043 58.4517C56.9452 58.7102 56.8656 59.0052 56.8656 59.3366V64H55.3791ZM66.7545 58.228L65.4072 58.4666C65.3508 58.2943 65.2614 58.1302 65.1387 57.9744C65.0194 57.8187 64.857 57.6911 64.6515 57.5916C64.446 57.4922 64.1891 57.4425 63.8809 57.4425C63.46 57.4425 63.1087 57.5369 62.8269 57.7259C62.5452 57.9115 62.4043 58.1518 62.4043 58.4467C62.4043 58.7019 62.4988 58.9074 62.6877 59.0632C62.8766 59.219 63.1816 59.3466 63.6025 59.446L64.8156 59.7244C65.5182 59.8868 66.0419 60.1371 66.3866 60.4751C66.7313 60.8132 66.9036 61.2524 66.9036 61.7926C66.9036 62.25 66.7711 62.6577 66.5059 63.0156C66.2441 63.3703 65.8778 63.6487 65.4072 63.8509C64.9399 64.053 64.398 64.1541 63.7815 64.1541C62.9264 64.1541 62.2287 63.9718 61.6884 63.6072C61.1482 63.2393 60.8168 62.7173 60.6941 62.0412L62.1309 61.8224C62.2204 62.197 62.4043 62.4804 62.6828 62.6726C62.9612 62.8615 63.3241 62.956 63.7715 62.956C64.2588 62.956 64.6482 62.8549 64.9399 62.6527C65.2315 62.4472 65.3774 62.197 65.3774 61.902C65.3774 61.6634 65.2879 61.4628 65.1089 61.3004C64.9332 61.138 64.6631 61.0154 64.2985 60.9325L63.0059 60.6491C62.2933 60.4867 61.7663 60.2282 61.4249 59.8736C61.0869 59.5189 60.9178 59.0698 60.9178 58.5263C60.9178 58.0755 61.0438 57.6811 61.2957 57.343C61.5476 57.005 61.8956 56.7415 62.3397 56.5526C62.7838 56.3603 63.2926 56.2642 63.866 56.2642C64.6913 56.2642 65.3409 56.4432 65.8149 56.8011C66.2888 57.1558 66.602 57.6314 66.7545 58.228ZM72.0347 64.1541C71.3188 64.1541 70.694 63.9901 70.1604 63.6619C69.6268 63.3338 69.2125 62.8748 68.9175 62.2848C68.6225 61.6948 68.475 61.0054 68.475 60.2166C68.475 59.4245 68.6225 58.7318 68.9175 58.1385C69.2125 57.5452 69.6268 57.0845 70.1604 56.7564C70.694 56.4283 71.3188 56.2642 72.0347 56.2642C72.7506 56.2642 73.3753 56.4283 73.909 56.7564C74.4426 57.0845 74.8569 57.5452 75.1519 58.1385C75.4468 58.7318 75.5943 59.4245 75.5943 60.2166C75.5943 61.0054 75.4468 61.6948 75.1519 62.2848C74.8569 62.8748 74.4426 63.3338 73.909 63.6619C73.3753 63.9901 72.7506 64.1541 72.0347 64.1541ZM72.0396 62.9062C72.5037 62.9062 72.8881 62.7836 73.193 62.5384C73.498 62.2931 73.7233 61.9666 73.8692 61.5589C74.0183 61.1513 74.0929 60.7022 74.0929 60.2116C74.0929 59.7244 74.0183 59.277 73.8692 58.8693C73.7233 58.4583 73.498 58.1286 73.193 57.88C72.8881 57.6314 72.5037 57.5071 72.0396 57.5071C71.5723 57.5071 71.1845 57.6314 70.8763 57.88C70.5714 58.1286 70.3443 58.4583 70.1952 58.8693C70.0493 59.277 69.9764 59.7244 69.9764 60.2116C69.9764 60.7022 70.0493 61.1513 70.1952 61.5589C70.3443 61.9666 70.5714 62.2931 70.8763 62.5384C71.1845 62.7836 71.5723 62.9062 72.0396 62.9062ZM79.0201 59.4659V64H77.5336V56.3636H78.9604V57.6065H79.0549C79.2306 57.2022 79.5057 56.8774 79.8802 56.6321C80.258 56.3868 80.7336 56.2642 81.307 56.2642C81.8274 56.2642 82.2831 56.3736 82.6742 56.5923C83.0653 56.8078 83.3686 57.1293 83.584 57.5568C83.7995 57.9844 83.9072 58.513 83.9072 59.1428V64H82.4207V59.3217C82.4207 58.7682 82.2765 58.3357 81.9881 58.0241C81.6998 57.7093 81.3037 57.5518 80.7999 57.5518C80.4552 57.5518 80.1486 57.6264 79.8802 57.7756C79.615 57.9247 79.4046 58.1435 79.2488 58.4318C79.0963 58.7169 79.0201 59.0616 79.0201 59.4659ZM88.4031 64.169C87.9192 64.169 87.4817 64.0795 87.0906 63.9006C86.6995 63.7183 86.3896 63.4548 86.1609 63.1101C85.9355 62.7654 85.8228 62.3428 85.8228 61.8423C85.8228 61.4115 85.9057 61.0568 86.0714 60.7784C86.2371 60.5 86.4608 60.2796 86.7426 60.1172C87.0243 59.9548 87.3392 59.8321 87.6872 59.7493C88.0352 59.6664 88.3898 59.6035 88.7511 59.5604C89.2085 59.5073 89.5797 59.4643 89.8647 59.4311C90.1498 59.3946 90.3569 59.3366 90.4862 59.2571C90.6154 59.1776 90.6801 59.0483 90.6801 58.8693V58.8345C90.6801 58.4003 90.5574 58.0639 90.3122 57.8253C90.0702 57.5866 89.709 57.4673 89.2284 57.4673C88.7279 57.4673 88.3335 57.5784 88.0451 57.8004C87.7601 58.0192 87.5629 58.2628 87.4535 58.5312L86.0565 58.2131C86.2222 57.7491 86.4642 57.3745 86.7823 57.0895C87.1038 56.8011 87.4734 56.5923 87.891 56.4631C88.3086 56.3305 88.7478 56.2642 89.2085 56.2642C89.5134 56.2642 89.8366 56.3007 90.1779 56.3736C90.5226 56.4432 90.8441 56.5724 91.1424 56.7614C91.444 56.9503 91.691 57.2204 91.8832 57.5717C92.0754 57.9197 92.1715 58.3722 92.1715 58.929V64H90.7198V62.956H90.6602C90.5641 63.1482 90.4199 63.3371 90.2277 63.5227C90.0354 63.7083 89.7885 63.8625 89.4869 63.9851C89.1853 64.1077 88.824 64.169 88.4031 64.169ZM88.7262 62.9759C89.1372 62.9759 89.4885 62.8946 89.7802 62.7322C90.0752 62.5698 90.2989 62.3577 90.4514 62.0959C90.6072 61.8307 90.685 61.5473 90.685 61.2457V60.2614C90.632 60.3144 90.5293 60.3641 90.3768 60.4105C90.2277 60.4536 90.057 60.4917 89.8647 60.5249C89.6725 60.5547 89.4852 60.5829 89.3029 60.6094C89.1206 60.6326 88.9682 60.6525 88.8456 60.669C88.5572 60.7055 88.2937 60.7668 88.0551 60.853C87.8197 60.9392 87.6308 61.0634 87.4883 61.2259C87.3491 61.3849 87.2795 61.5971 87.2795 61.8622C87.2795 62.2301 87.4154 62.5085 87.6872 62.6974C87.959 62.883 88.3053 62.9759 88.7262 62.9759ZM100.154 58.228L98.8065 58.4666C98.7501 58.2943 98.6606 58.1302 98.538 57.9744C98.4187 57.8187 98.2563 57.6911 98.0508 57.5916C97.8453 57.4922 97.5884 57.4425 97.2802 57.4425C96.8593 57.4425 96.5079 57.5369 96.2262 57.7259C95.9445 57.9115 95.8036 58.1518 95.8036 58.4467C95.8036 58.7019 95.8981 58.9074 96.087 59.0632C96.2759 59.219 96.5809 59.3466 97.0018 59.446L98.2149 59.7244C98.9175 59.8868 99.4412 60.1371 99.7859 60.4751C100.131 60.8132 100.303 61.2524 100.303 61.7926C100.303 62.25 100.17 62.6577 99.9052 63.0156C99.6434 63.3703 99.2771 63.6487 98.8065 63.8509C98.3392 64.053 97.7972 64.1541 97.1808 64.1541C96.3257 64.1541 95.628 63.9718 95.0877 63.6072C94.5475 63.2393 94.216 62.7173 94.0934 62.0412L95.5302 61.8224C95.6197 62.197 95.8036 62.4804 96.082 62.6726C96.3605 62.8615 96.7234 62.956 97.1708 62.956C97.658 62.956 98.0475 62.8549 98.3392 62.6527C98.6308 62.4472 98.7767 62.197 98.7767 61.902C98.7767 61.6634 98.6872 61.4628 98.5082 61.3004C98.3325 61.138 98.0624 61.0154 97.6978 60.9325L96.4052 60.6491C95.6926 60.4867 95.1656 60.2282 94.8242 59.8736C94.4862 59.5189 94.3171 59.0698 94.3171 58.5263C94.3171 58.0755 94.4431 57.6811 94.695 57.343C94.9469 57.005 95.2949 56.7415 95.739 56.5526C96.1831 56.3603 96.6919 56.2642 97.2653 56.2642C98.0906 56.2642 98.7402 56.4432 99.2142 56.8011C99.6881 57.1558 100.001 57.6314 100.154 58.228Z"
              fill="#F5F5F5"
            />
            <mask
              id="mask0_102_235"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="45"
              y="0"
              width="48"
              height="48"
            >
              <rect x="45" width="48" height="48" fill="url(#pattern0)" />
            </mask>
            <g mask="url(#mask0_102_235)">
              <rect x="45" width="48" height="48" fill="#F5F5F5" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_102_235" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_102_235"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMElEQVR4nO2cTYsdRRSGn0lINgl+YRJxlTjqJhuTiIJGYtyIK+MkjqAgiMQ/EAU1oCYiqCOIuNaFjgFdxbWJg6ARv3bBmfFzowuNKE5EM0IsKTgXZpJ7u6vura6uvnkfOJue29XnPafrVHVV94AQQgghhBBCCCGEEEIIIUQ5TAC7gKPAHLAA/GU2b8eOADvbdnQcAz8NLAIu0HxyDti5YgQmgc8iAn+hfQpsUwaGYzfwywjB79lvwF1KQhx7gX8TBL9ny8AeJSGMbcCvCYO/sidcryRUMzFiza+zUxqYq3mgweD3bL96weC7fzFDAvwzg+jDzRmC37MdysDFPJ8xAc8pARczlzEBJ7uegPU2YB67YE1mwY5N229iWMyYgIUC9A6Nn0V8HyDyO2Aqot2ljAlYKkBvNGuBV4YQOwOs6WAC1jasN5phnOnZS4WVoPkC9EaxP4HofTXX+LCgQTiH3mDWW30b1aEfagaqIxkT8EwBeltZHri/4jo7MybgpgL0BnMsoUOzNUsRCxmC/3UheoP5JuP8+0CGBNxXkN4gljJO/yZsG7Gp4H8csBydU28QZxM69GfA9bY2uCEzWaDerPPz0C65x7YRU13Xt3VHwXqzDUpvR1z39oSb8ns7oHcg0wkd8oNs7P7wqRFr/tYO6W30weRbYN0Q15+wJ9P5yKnmVEf19mUqgUP3JvBjh22mnLSEnDWbt2PP1jxkdU3vKmZGcOZFusdMaXr9EuvLQ64MNrI82zDF6t1n9S2kBibvhi1QpN51ttA026cWz9ron2wAKoBLTa8QQgjB1cCdwEGbl78PfGmviZwBzpmdsWP+b8fttwdtUc+3IQK51mYbr1kw/0vwROosOW8BjwHb9Yr6arbb8kLMWs+o9qMl2X8GdUmyBTgMnM4Y9EF22nzZTEe4BngIeBW4JfLc64A3rW67wsz79MYQX1XearF40G6sRvB3x+O2Nn/eHPaDXSiXA68n3uVyDdmylafLIvQdt3N9bD4BDgGbSMAu2yFa7rPZHNpl7wF+LiCwLtJ+Au4O1Li5z16y71HvDPvl/o3AexWzkNB3H59e0WO6aOeBJwO1Dlo59TF8F7ghpJE1VmqqavS5wFr3QgEBdInMf71Tx5aaEvuPlaaBS9VXBL4g+0GAM48UEDSX2B4O0H0ioJ0TNiau4irgi0BHDgXcCX8UEDCX2H4PGPeeCGzrc+DKlR8ifBThyG01ThwuIFiuIXuqRvvuiLbmLPY8GumEn8tX8VUBgXINma8SVUxGtudLdfS/BthQ48Q4lh9n5rVVsTGyPf8eLH9HnlSHG3OrI6YtH/tWHXAdtNT6W3fAdcyUAJQA9YAKVIJQCWq9TjuNAe0HymkQbj9YTrOg8bM6ottr2wHXMVMCUALUAypQCaJjJUgIIYQQQgghhBBCCCGEEIw1/wM0UiIvl4A7TAAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </div>
      </div>
      <div className=" flex  gap-6 pl-8 ">
        <Buttons
          text="Nueva Cuenta"
          blue={true}
          width="!w-40"
          routing="/register"
        />
        <Buttons
          text="Iniciar sesion"
          width="!w-40"
          routing="/login"
          blue={false}
        />
      </div>
    </div>
  );
}

export default LandingHeader;
