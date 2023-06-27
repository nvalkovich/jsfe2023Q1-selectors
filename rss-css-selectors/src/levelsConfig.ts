import { Level } from './types/interfaces';

const levelsConfig: Level[] = [
  {
    level: 1,
    task: 'Select the plate',
    html: `<div class="picnic__blanket">
    <plate class="plate" animation="active-plate" state="active" order="first"></plate>
    </div>`,
    selector: 'plate',
    markup: `&lt;div class="picnic-blanket"&gt;
  &lt;plate/&gt;
&lt;/div&gt;`,
  },
  {
    level: 2,
    task: 'Select the apple on a plate',
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <apple class="apple" location="plate" animation="active-plate" state="active" level="2"></div>
    </apple>
    <apple class="apple" location="blanket" level="2" ></div>
    </apple>`,
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <apple class="apple" location="plate" level="3"></apple>
    <apple class="apple red" animation="active-element" state="active" location="plate" level="3"></apple>
    </plate>
    <apple class="apple" location="blanket" level="3"></apple>
    <apple class="apple red" animation="active-element" state="active" size="small" location="blanket" level="3"></apple>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <orange class="orange" level="4"></orange>
    <orange class="orange sliced-orange" animation="active-element" state="active" level="4"></orange>
    </plate>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <apple class="apple" animation="active-element" state="active" location="plate" level="5"></apple>
    <orange class="orange" animation="active-element" state="active" level="5"></orange>
    <apple class="apple red" animation="active-element" size="small" state="active" level="5"></apple>
    </plate>
    <apple class="apple" location="blanket" level="5" ></apple>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <apple class="apple" level="6"></apple>
    <orange class="orange" level="6"></orange>
    <apple class="apple red" size="small" level="6"></apple>
    </plate>
    <plate class="plate" animation="active-plate" order="second" state="active" content="baking">
    <donut class="donut" level="6"></donut>
    <bread class="bread" level="6"></bread>
    </plate>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <donut class="donut" location="plate" level="7"></donut>
    <orange class="orange" level="7"></orange>
    <apple class="apple red" size="small" level="7"></apple>
    </plate>
    <box class="box" order="second">
    <donut class="donut" location="box" order="first" level="7"></donut>
    <donut class="donut" animation="active-element" location="box" state="active" order="second" level="7"></donut>
    <donut class="donut" location="box" order="third" level="7"></donut>
    </box>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <bread class="bread" level="8">
    <sausage class="sausage" animation="active-element" location="bread" state="active" level="8"></sausage>
    </bread>
    </plate>
    <plate class="plate" order="second">
    <sausage class="sausage" location="plate" order="first" level="8"></sausage>
    <bread class="bread" level="8">
    <sausage class="sausage" location="bread" level="8"></sausage>
    </bread>
    <sausage class="sausage" location="plate" order="second" level="8"></sausage>
    </plate>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <plate class="plate" order="first">
    <donut class="donut" id="acing-donut" location="plate" level="9"></donut>
    <orange class="orange sliced-orange" level="9"></orange>
    <donut class="donut" location="plate" level="9"></donut>
    </plate>
    <box class="box" order="second">
    <donut class="donut" animation="active-element" location="box" order="first" state="active" level="9"></donut>
    <donut class="donut" animation="active-element"location="box" order="second" state="active" level="9"></donut>
    <donut  class="donut" id="acing-donut" location="box" order="third" level="9"></donut>
    <donut class="donut" animation="active-element" location="box" order="fourth" state="active" level="9"></donut>
    </box>
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
    html: `<div class="picnic__blanket picnic-blanket">
    <box class="box" order="first">
    <donut class="donut" location="box" order="first" level="10"></donut>
    <donut class="donut" location="box" order="second" level="10"></donut>
    <donut class="donut" location="box" order="third" level="10"></donut>
    <donut class="donut" location="box" order="fourth" level="10"></donut>
    </box>
    <box class="box" animation="active-box" state="active" order="second">
    <bread class="bread sandwitch" level="10">
    <sausage class="sausage" level="10"></sausage>
    </bread>
    </box>
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

export default levelsConfig;
