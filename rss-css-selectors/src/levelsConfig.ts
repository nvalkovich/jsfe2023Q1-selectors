import { Level } from './types/interfaces';

const levelsConfig: Level[] = [
  {
    level: 1,
    task: 'Select the plate',
    selector: 'plate',
    markup: `
  <plate/>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',
      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        attributes: [
          { attributeName: 'animation', attributeValue: 'active-plate' },
          { attributeName: 'state', attributeValue: 'active' },
        ],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: null,
      }],
    },
  },
  {
    level: 2,
    task: 'Select the apple on a plate',
    selector: 'plate>apple',
    markup: `
<plate>
  <apple/>
</plate>
<apple/>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',
      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'apple',
          className: 'apple',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '2' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<apple></apple>' },
            { attributeName: 'location', attributeValue: 'plate' },
          ],
          children: null,
        }],
      }],
    },
  },
  {
    level: 3,
    task: 'Select red apples',
    selector: '.red',
    markup: `
<plate>
  <apple/>
  <apple class="red"/>
</plate>
<apple/>
<apple class="red"/>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',
      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        attributes: [
          { attributeName: 'animation', attributeValue: 'active-element' },
        ],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [
          {
            element: 'apple',
            className: 'apple red',
            toWiev: {
              selector: 'className',
              value: 'red',
            },
            attributes: [
              { attributeName: 'animation', attributeValue: 'active-element' },
              { attributeName: 'state', attributeValue: 'active' },
              { attributeName: 'level', attributeValue: '3' },
            ],
            commonAtributes: [
              { attributeName: 'markup', attributeValue: '<apple class="red"></apple>' },
              { attributeName: 'location', attributeValue: 'plate' },
            ],
            children: null,
          },
          {
            element: 'apple',
            className: 'apple',
            attributes: [{ attributeName: 'level', attributeValue: '3' }],
            commonAtributes: [
              { attributeName: 'markup', attributeValue: '<apple></apple>' },
              { attributeName: 'location', attributeValue: 'plate' },
            ],
            children: null,
          },
        ],
      },
      {
        element: 'apple',
        className: 'apple',
        attributes: [{ attributeName: 'level', attributeValue: '3' }],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<apple></apple>' },
          { attributeName: 'location', attributeValue: 'blanket' },
        ],
        children: null,
      },
      {
        element: 'apple',
        className: 'apple red',
        toWiev: {
          selector: 'className',
          value: 'red',
        },
        attributes: [
          { attributeName: 'animation', attributeValue: 'active-element' },
          { attributeName: 'state', attributeValue: 'active' },
          { attributeName: 'size', attributeValue: 'small' },
          { attributeName: 'level', attributeValue: '3' },
        ],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<apple class="red"></apple>' },
          { attributeName: 'location', attributeValue: 'blanket' },
        ],
        children: null,
      },
      ],
    },
  },
  {
    level: 4,
    task: 'Select the sliced orange',
    selector: '#sliced-orange',
    markup: `
    <plate>
      <orange/>
      <orange id="sliced-orange"/>
    </plate>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',
      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'orange',
          className: 'orange',
          attributes: [
            { attributeName: 'level', attributeValue: '4' },
          ],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<orange></orange>' }],
          children: null,
        },
        {
          element: 'orange',
          className: 'orange sliced-orange',
          toWiev: { selector: 'className', value: 'sliced-orange' },
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '4' },
          ],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<orange id="sliced-orange></orange>' }],
          children: null,
        },
        ],
      }],
    },
  },
  {
    level: 5,
    task: 'Select all on a plate',
    selector: 'plate>*',
    markup: `
    <div class="picnic-blanket">
      <plate>
        <apple/>
        <orange/>
        <apple class="red"/>
      </plate>
      <apple/>
    </div>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',

      toWiev: { selector: 'className', value: 'picnic-blanket' },
      children: [{
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'apple',
          className: 'apple',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '5' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<apple></apple>' },
            { attributeName: 'location', attributeValue: 'plate' },
          ],
          children: null,
        },
        {
          element: 'orange',
          className: 'orange',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '5' },
          ],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<orange></orange>' }],
          children: null,
        },
        {
          element: 'apple',
          className: 'apple red',
          toWiev: { selector: 'className', value: 'red' },
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'size', attributeValue: 'small' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '5' },
          ],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<apple class="red"></apple>' }],
          children: null,
        }],
      },
      {
        element: 'apple',
        className: 'apple',
        attributes: [{ attributeName: 'level', attributeValue: '5' }],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<apple></apple>' },
          { attributeName: 'location', attributeValue: 'blanket' },
        ],
        children: null,
      }],
    },
  },
  {
    level: 6,
    task: 'Select the plate of baked goods',
    selector: 'plate[content="baking"]',
    markup: `
<plate>
  <apple/>
  <orange/>
  <apple class="red"/>
</plate>
<plate content="baking">
  <bread/>
  <donut/>
</plate>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',

      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'apple',
          className: 'apple',
          attributes: [{ attributeName: 'level', attributeValue: '6' }],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<apple></apple>' }],
          children: null,
        },
        {
          element: 'orange',
          className: 'orange',
          attributes: [{ attributeName: 'level', attributeValue: '6' }],
          children: null,
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<orange></orange>' }],
        },
        {
          element: 'apple',
          className: 'apple red',
          toWiev: {
            selector: 'className',
            value: 'red',
          },
          attributes: [
            { attributeName: 'size', attributeValue: 'small' },
            { attributeName: 'level', attributeValue: '6' },
          ],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<apple class="red"></apple>' }],
          children: null,
        }],
      },
      {
        element: 'plate',
        className: 'plate',
        toWiev: {
          selector: 'attributes',
          value: 'content="baking"',
        },
        attributes: [
          { attributeName: 'animation', attributeValue: 'active-plate' },
          { attributeName: 'state', attributeValue: 'active' },
          { attributeName: 'content', attributeValue: 'baking' },
        ],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate content="baking"></plate>' },
          { attributeName: 'order', attributeValue: 'second' },
        ],
        children: [{
          element: 'bread',
          className: 'bread',
          attributes: [{ attributeName: 'level', attributeValue: '6' }],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<bread></bread>' }],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '6' }],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<donut></donut>' }],
          children: null,
        }],
      }],
    },
  },
  {
    level: 7,
    task: 'Select the second donut in the box',
    selector: 'box donut:nth-child(2)',
    markup: `
<plate>
  <donut/>
  <orange>
  <apple class="red"/>
</plate>
<box>
  <donut/>
  <donut/>
  <donut/>
</box>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',

      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '7' }],
          commonAtributes: [
            { attributeName: 'location', attributeValue: 'plate' },
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
          ],
          children: null,
        },
        {
          element: 'orange',
          className: 'orange',
          attributes: [{ attributeName: 'level', attributeValue: '7' }],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<orange></orange>' }],
          children: null,
        },
        {
          element: 'apple',
          className: 'apple red',
          toWiev: {
            selector: 'className',
            value: 'red',
          },
          attributes: [
            { attributeName: 'size', attributeValue: 'small' },
            { attributeName: 'level', attributeValue: '7' },
          ],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<apple class="red"></apple>' }],
          children: null,
        }],
      },
      {
        element: 'box',
        className: 'box',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<box></box>' },
          { attributeName: 'order', attributeValue: 'second' },
        ],
        children: [{
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '7' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'first' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '7' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'second' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '7' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'third' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        }],
      }],
    },
  },
  {
    level: 8,
    task: 'Select the sausage on the first plate',
    selector: 'plate:first-child>bread>sausage',
    markup: `
<plate>
  <bread>
    <sausage/>
  </bread>
</plate>
<plate>
  <sausage/>
  <bread>
  <sausage/>
  </bread>
  <sausage/>
</plate>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',

      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'bread',
          className: 'bread',
          attributes: [{ attributeName: 'level', attributeValue: '8' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<bread></bread>' },
            { attributeName: 'order', attributeValue: 'first' },
          ],
          children: [{
            element: 'sausage',
            className: 'sausage',
            attributes: [
              { attributeName: 'animation', attributeValue: 'active-element' },
              { attributeName: 'state', attributeValue: 'active' },
              { attributeName: 'level', attributeValue: '8' },
            ],
            commonAtributes: [
              { attributeName: 'markup', attributeValue: '<sausage></sausage>' },
              { attributeName: 'order', attributeValue: 'first' },
              { attributeName: 'location', attributeValue: 'bread' },
            ],
            children: null,
          }],
        }],
      },
      {
        element: 'plate',
        className: 'plate',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'second' },
        ],
        children: [{
          element: 'sausage',
          className: 'sausage',
          attributes: [{ attributeName: 'level', attributeValue: '8' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<sausage></sausage>' },
            { attributeName: 'order', attributeValue: 'first' },
            { attributeName: 'location', attributeValue: 'plate' },
          ],
          children: null,
        },
        {
          element: 'bread',
          className: 'bread',
          attributes: [{ attributeName: 'level', attributeValue: '8' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<bread></bread>' },
            { attributeName: 'order', attributeValue: 'second' },
          ],
          children: [{
            element: 'sausage',
            className: 'sausage',
            attributes: [{ attributeName: 'level', attributeValue: '8' }],
            commonAtributes: [
              { attributeName: 'markup', attributeValue: '<sausage></sausage>' },
              { attributeName: 'order', attributeValue: 'second' },
              { attributeName: 'location', attributeValue: 'bread' },
            ],
            children: null,
          }],
        }],
      }],
    },
  },

  {
    level: 9,
    task: 'Select all donuts in a box without icing',
    selector: 'box donut:not(#acing-donut)',
    markup: `
<plate>
  <donut/>
  <orange id="sliced-orange"/>
  <donut/>
</plate>
<box>
  <donut/>
  <donut id="acing-donut"/>
  <donut/>
  <donut/>
</box>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',

      toWiev: {
        selector: 'className',
        value: 'picnic-blanket',
      },
      children: [{
        element: 'plate',
        className: 'plate',
        attributes: [
        ],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<plate></plate>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'donut',
          className: 'donut',
          id: 'acing-donut',
          toWiev: { selector: 'id', value: 'acing-donut' },
          attributes: [{ attributeName: 'level', attributeValue: '9' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut id="acing-donut"></donut>' },
            { attributeName: 'location', attributeValue: 'plate' },
          ],
          children: null,
        },
        {
          element: 'orange',
          className: 'orange sliced-orange',
          toWiev: { selector: 'id', value: 'sliced-orange' },
          attributes: [{ attributeName: 'level', attributeValue: '9' }],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<orange id="sliced-orange"></orange>' }],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '9' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'location', attributeValue: 'plate' },
          ],
          children: null,
        }],
      },
      {
        element: 'box',
        className: 'box',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<box></box>' },
          { attributeName: 'order', attributeValue: 'second' },
        ],
        children: [{
          element: 'donut',
          className: 'donut',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '9' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'first' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '9' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'second' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          id: 'acing-donut',
          toWiev: { selector: 'id', value: 'acing-donut' },
          attributes: [
            { attributeName: 'level', attributeValue: '9' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut id="acing-donut"></donut>' },
            { attributeName: 'order', attributeValue: 'third' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [
            { attributeName: 'animation', attributeValue: 'active-element' },
            { attributeName: 'state', attributeValue: 'active' },
            { attributeName: 'level', attributeValue: '9' },
          ],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'fourth' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        }],
      }],
    },
  },
  {
    level: 10,
    task: 'Select the box that has a sandwitch',
    selector: 'box:has(.sandwitch)',
    markup: `
<box>
  <donut/>
  <donut/>
  <donut/>
  <donut/>
</box>
<box>
  <donut/>
  <bread class="sandwitch">
    <sausage/>
  </bread>
</box>`,
    html: {
      element: 'div',
      className: 'picnic__blanket picnic-blanket',

      toWiev: { selector: 'className', value: 'picnic-blanket' },
      children: [{
        element: 'box',
        className: 'box',
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<box></box>' },
          { attributeName: 'order', attributeValue: 'first' },
        ],
        children: [{
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '10' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'first' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '10' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'second' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '10' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'third' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        },
        {
          element: 'donut',
          className: 'donut',
          attributes: [{ attributeName: 'level', attributeValue: '10' }],
          commonAtributes: [
            { attributeName: 'markup', attributeValue: '<donut></donut>' },
            { attributeName: 'order', attributeValue: 'fourth' },
            { attributeName: 'location', attributeValue: 'box' },
          ],
          children: null,
        }],
      },
      {
        element: 'box',
        className: 'box',
        attributes: [
          { attributeName: 'animation', attributeValue: 'active-box' },
          { attributeName: 'state', attributeValue: 'active' },
        ],
        commonAtributes: [
          { attributeName: 'markup', attributeValue: '<box></box>' },
          { attributeName: 'order', attributeValue: 'second' },
        ],
        children: [{
          element: 'bread',
          className: 'bread sandwitch',
          toWiev: { selector: 'className', value: 'sandwitch' },
          attributes: [{ attributeName: 'level', attributeValue: '10' }],
          commonAtributes: [{ attributeName: 'markup', attributeValue: '<bread class="sandwitch"></bread>' }],
          children: [{
            element: 'sausage',
            className: 'sausage',
            attributes: [{ attributeName: 'level', attributeValue: '10' }],
            commonAtributes: [{ attributeName: 'markup', attributeValue: '<sausage></sausage>' }],
            children: null,
          }],
        }],
      }],
    },
  },
];

export default levelsConfig;
