import React, { useState, useEffect } from 'react';
import { Liquid, measureTextWidth } from '@ant-design/charts';

const DemoLiquid = () => {
  var config = {
    percent: 0.25,
    
    outline: {
      border: 4,
      distance: 8,
    },
    statistic: {
        title: {
          formatter: function formatter() {
            return '来图书馆次数';
          },
          style: function style(_ref) {
            var percent = _ref.percent;
            return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' };
          },
        },
        content: {
            style: function style(_ref2) {
              var percent = _ref2.percent;
              return {
                fontSize: 60,
                lineHeight: 1,
                fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
              };
            },
            customHtml: function customHtml(container, view, _ref3) {
              var percent = 0.25;
              var _container$getBoundin = container.getBoundingClientRect(),
                width = _container$getBoundin.width,
                height = _container$getBoundin.height;
              var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
              var text = '超越了'.concat((percent * 100).toFixed(0), '%的同学');
              var textWidth = (0, measureTextWidth)(text, { fontSize: 60 });
              var scale = Math.min(d / textWidth, 1);
              return '<div style="width:'
                .concat(d, 'px;display:flex;align-items:center;justify-content:center;font-size:')
                .concat(scale, 'em;line-height:')
                .concat(scale <= 1 ? 1 : 'inherit', '">')
                .concat(text, '</div>');
            },
          },
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;