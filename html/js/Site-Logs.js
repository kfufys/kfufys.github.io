document.addEventListener('DOMContentLoaded', function() {
    const logContainer = document.querySelector('.log-container');
    console.log('logContainer:', logContainer); // 检查是否正确选中 .log-container 元素
    if (!logContainer) {
        console.error('未找到 .log-container 元素');
        return;
    }
    logContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('log-details-btn')) {
            console.log('点击了查看详情按钮'); // 检查点击事件是否触发
            // 获取所有当前显示的详情区域并隐藏
            const allDetails = document.querySelectorAll('.log-details');
            allDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            // 显示当前点击按钮对应的详情区域
            const details = event.target.nextElementSibling;
            console.log('当前详情区域:', details);
            // 使用 getComputedStyle 判断元素是否隐藏
            const isHidden = window.getComputedStyle(details).display === 'none';
            if (isHidden) {
                details.style.display = 'block';
            }
        }
    });
});