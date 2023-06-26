import { Level } from './types/interfaces';

const levels: Level[] = [
  {
    level: 1,
    task: 'Select the plate',
    html: `<div class="picnic__blanket">
    <div class="plate active-plate" order="first"></div>
    </div>`,
    selector: 'plate',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate/&gt;
&lt;/div&gt;`,
  },
  {
    level: 2,
    task: 'Select the apple on a plate',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="apple active-plate" location="plate" level="2"></div>
    </div>
    <div class="apple" location="blanket" level="2" ></div>
    </div>`,
    selector: 'plate>apple',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;apple/&gt;
  &lt;/plate&gt;
  &lt;apple/&gt;
&lt;/div&gt;`,
  },
  {
    level: 3,
    task: 'Select red apples',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="apple" location="plate" level="3"></div>
    <div class="red-apple active-element" location="plate" level="3"></div>
    </div>
    <div class="apple" location="blanket" level="3"></div>
    <div class="red-apple active-element" size="small" location="blanket" level="3"></div>
    </div>`,
    selector: '.red',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;apple class="red"/&gt;
    &lt;apple/&gt;
  &lt;/plate&gt;
  &lt;apple/&gt;
  &lt;apple class="red"/&gt;
&lt;/div&gt;`,
  },
  {
    level: 4,
    task: 'Select the sliced orange',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="orange" level="4"></div>
    <div class="sliced-orange active-element" level="4"></div>
    </div>`,
    selector: '#sliced-orange',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;orange/&gt;
    &lt;orange id="sliced-orange"/&gt;
  &lt;/plate&gt;
&lt;/div&gt;`,
  },
  {
    level: 5,
    task: 'Select all on a plate',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="apple active-element" location="plate" level="5"></div>
    <div class="orange active-element" level="5"></div>
    <div class="red-apple active-element" size="small" level="5"></div>
    </div>
    <div class="apple" location="blanket" level="5" ></div>
    </div>`,
    selector: 'plate>*',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;apple/&gt;
    &lt;orange/&gt;
    &lt;apple class="red"/&gt;
  &lt;/plate&gt;
  &lt;/apple&gt;
&lt;/div&gt;`,
  },
  {
    level: 6,
    task: 'Select the plate of baked goods',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="apple" level="6"></div>
    <div class="orange" level="6"></div>
    <div class="red-apple" size="small" level="6"></div>
    </div>
    <div class="plate active-plate" order="second" content="baking">
    <div class="donut" level="6"></div>
    <div class="bread" level="6"></div>
    </div>
    </div>`,
    selector: 'plate[content="baking"]',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;apple/&gt;
    &lt;orange/&gt;
    &lt;apple class="red"/&gt;
  &lt;/plate&gt;
  &lt;plate content="baking"&gt;
    &lt;bread/&gt;
    &lt;donut/&gt;
  &lt;/plate&gt;
&lt;/div&gt;`,
  },
  {
    level: 7,
    task: 'Select the second donut in the box',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="donut" location="plate" level="7"></div>
    <div class="orange" level="7"></div>
    <div class="red-apple" size="small" level="7"></div>
    </div>
    <div class="box" order="second">
    <div class="donut" location="box" order="first" level="7"></div>
    <div class="donut active-element" location="box" order="second" level="7"></div>
    <div class="donut" location="box" order="third" level="7"></div>
    </div>
    </div>`,
    selector: 'box donut:nth-child(2)',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;donut/&gt;
    &lt;orange"/&gt;
    &lt;apple class="red"/&gt;
  &lt;/plate&gt;
  &lt;box&gt;
    &lt;donut/&gt;
    &lt;donut/&gt;
    &lt;donut/&gt;
  &lt;/box&gt;
&lt;/div&gt;`,
  },
  {
    level: 8,
    task: 'Select the sausage on the first plate',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="bread" level="8">
    <div class="sausage active-element" location="bread" level="8"></div>
    </div>
    </div>
    <div class="plate" order="second">
    <div class="sausage" location="plate" order="first" level="8"></div>
    <div class="bread" level="8">
    <div class="sausage" location="bread" level="8"></div>
    </div>
    <div class="sausage" location="plate" order="second" level="8"></div>
    </div>
    </div>`,
    selector: 'plate:first-child>bread>sausage',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;bread&gt;
      &lt;sausage/&gt;
    &lt;/bread&gt;
  &lt;/plate&gt;
  &lt;plate&gt;
    &lt;sausage/&gt;
    &lt;bread&gt;
    &lt;sausage/&gt;
    &lt;/bread&gt;
    &lt;sausage/&gt;
  &lt;/plate&gt;
&lt;/div&gt;`,
  },
  {
    level: 9,
    task: 'Select all donuts in a box without icing',
    html: `<div class="picnic__blanket">
    <div class="plate" order="first">
    <div class="acing-donut" location="plate" level="9"></div>
    <div class="sliced-orange" level="9"></div>
    <div class="donut" location="plate" level="9"></div>
    </div>
    <div class="box" order="second">
    <div class="donut active-element" location="box" order="first" level="9"></div>
    <div class="donut active-element" location="box" order="second" level="9"></div>
    <div class="acing-donut" location="box" order="third" level="9"></div>
    <div class="donut active-element" location="box" order="fourth" level="9"></div>
    </div>
    </div>`,
    selector: 'box donut:not(#acing-donut)',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate&gt;
    &lt;donut/&gt;
    &lt;orange id="sliced-orange"/&gt;
    &lt;donut/&gt;
  &lt;/plate&gt;
  &lt;box&gt;
    &lt;donut/&gt;
    &lt;donut id="acing-donut"/&gt;
    &lt;donut/&gt;
    &lt;donut/&gt;
  &lt;/box&gt;
&lt;/div&gt;`,
  },
  {
    level: 10,
    task: 'Select the box that has a sandwitch',
    html: `<div class="picnic__blanket">
    <div class="box" order="first">
    <div class="donut " location="box" order="first" level="10"></div>
    <div class="donut " location="box" order="second" level="10"></div>
    <div class="donut" location="box" order="third" level="10"></div>
    <div class="donut " location="box" order="fourth" level="10"></div>
    </div>
    <div class="box active-box" order="second">
    <div class="bread sandwitch" level="10">
    <div class="sausage" level="10"></div>
    </div>
    </div>
    </div>`,
    selector: 'box:has(.sandwitch)',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;box&gt;
    &lt;donut/&gt;
    &lt;donut/&gt;
    &lt;donut/&gt;
    &lt;donut/&gt;
  &lt;/box&gt;
  &lt;box&gt;
    &lt;donut/&gt;
    &lt;bread class="sandwitch"&gt;
      &lt;sausage/&gt;
    &lt;/bread&gt;
  &lt;/box&gt;
&lt;/div&gt;`,
  },
];

export default levels;
