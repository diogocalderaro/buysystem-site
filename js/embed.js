
(function() {
    if (document.getElementById('themevally-support-widget')) return;

    const container = document.createElement('div');
    container.id = 'themevally-support-widget';
    container.style.position = 'fixed';
    container.style.bottom = '0';
    container.style.right = '0';
    container.style.zIndex = '2147483647';
    container.style.maxWidth = '100%';
    container.style.width = '120px';
    container.style.height = '120px';
    container.style.border = 'none';
    container.style.transition = 'none';

    const iframe = document.createElement('iframe');
    iframe.src = '//support.themevally.com/embed';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.allowTransparency = 'true';

    container.appendChild(iframe);
    document.body.appendChild(container);

    window.addEventListener('message', function(event) {
        if (event.data.type === 'chat_resize') {
            container.style.width = event.data.width;
            container.style.height = event.data.height;
        }
    });
})();
    