document.addEventListener('DOMContentLoaded', function() {
  // 选择所有 pre 元素
  document.querySelectorAll('pre').forEach(function(preBlock) {
    // 创建包装容器
    var wrapper = document.createElement('div');
    var header = document.createElement('div');
    var button = document.createElement('button');
    
    // 设置类名
    wrapper.className = 'code-wrapper';
    header.className = 'code-header';
    button.className = 'copy-button';
    button.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
    
    // 组装DOM
    header.appendChild(button);
    
    // 将原始的 pre 元素包装在新容器中
    preBlock.parentNode.insertBefore(wrapper, preBlock);
    wrapper.appendChild(header);
    wrapper.appendChild(preBlock);
    
    // 添加点击事件
    button.addEventListener('click', function() {
      var text = preBlock.textContent;
      navigator.clipboard.writeText(text).then(function() {
        button.classList.add('copied');
        setTimeout(function() {
          button.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        console.error('复制失败:', err);
      });
    });
  });
}); 