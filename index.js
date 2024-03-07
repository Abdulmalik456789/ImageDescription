// index.js

// 创建图片元素
const img = document.createElement('img');
img.src = 'path_to_your_image.jpg'; // 替换为你的图片路径
document.body.appendChild(img);

// 创建包含文字描述的div
const description = document.createElement('div');
description.textContent = '这是图片的描述'; // 替换为你想要的文字描述
description.style.position = 'absolute';
description.style.top = '20px'; // 调整描述在垂直方向上的位置
description.style.left = '50%'; // 描述在图片上水平方向上居中
description.style.transform = 'translateX(-50%)'; // 使描述在水平方向上居中
description.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // 设置描述的背景颜色和透明度
description.style.padding = '10px'; // 设置描述的内边距
description.style.borderRadius = '5px'; // 设置描述的圆角
description.style.fontFamily = 'Arial, sans-serif'; // 设置文字字体
description.style.fontSize = '16px'; // 设置文字大小
description.style.color = '#333'; // 设置文字颜色
description.style.zIndex = '999'; // 设置描述的层级，确保它在图片上方

// 将描述添加到body中
document.body.appendChild(description);
