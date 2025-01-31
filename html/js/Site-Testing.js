function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function setDates() {
    const startTime = '2025-02-01';
    if (startTime) {
        // 设置开始时间
        $('.startTime').text(startTime);

        // 获取当前日期
        const now = new Date();
        // 设置公告日期
        const announcementDate =
            `${now.getFullYear()}年${String(now.getMonth() + 1).padStart(2, '0')}月${String(now.getDate()).padStart(2, '0')}日`;
        $('.announcementDate').text(announcementDate);

        // 计算结束日期
        const startDateObj = new Date(startTime);
        const endDateObj = new Date(startDateObj);
        endDateObj.setDate(endDateObj.getDate() + 7);
        const endDate = formatDate(endDateObj);
        // 设置结束时间
        $('.endTime').text(endDate);
    }
}

// 页面加载完成后调用函数
$(document).ready(function() {
    setDates();
});