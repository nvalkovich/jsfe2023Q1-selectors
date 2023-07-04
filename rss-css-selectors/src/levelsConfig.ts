import { Level } from './types/interfaces';

const levelsConfig: Level[] = [
  {
    level: 1,
    goalElementsNumber: 1,
    task: 'Select the plate',
    selector: 'plate',
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
    goalElementsNumber: 1,
    task: 'Select the apple on a plate',
    selector: 'plate>apple',
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
    goalElementsNumber: 2,
    task: 'Select red apples',
    selector: '.red',
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
    goalElementsNumber: 1,
    task: 'Select the sliced orange',
    selector: '#sliced-orange',
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
          id: 'sliced-orange',
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
    goalElementsNumber: 3,
    task: 'Select all on a plate',
    selector: 'plate>*',
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
    goalElementsNumber: 1,
    task: 'Select the plate of baked goods',
    selector: 'plate[content="baking"]',
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
    goalElementsNumber: 1,
    task: 'Select the second donut in the box',
    selector: 'box donut:nth-child(2)',
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
    goalElementsNumber: 1,
    task: 'Select the sausage on the first plate',
    selector: 'plate:first-child>bread>sausage',
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
    goalElementsNumber: 3,
    task: 'Select all donuts in a box without icing',
    selector: 'box donut:not(#acing-donut)',
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
    goalElementsNumber: 1,
    task: 'Select the box that has a sandwitch',
    selector: 'box:has(.sandwitch)',
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
