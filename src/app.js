// List of video sources (replace with your own video files in the 'public/videos' folder)
const videos = [
    { src: '../public/videos/video1.mp4', caption: 'Nature Beauty' },
    { src: '../public/videos/video2.mp4', caption: 'Urban Life' },
    { src: '../public/videos/video3.mp4', caption: 'Adventure' },
    { src: '../public/videos/video4.mp4', caption: 'Technology' },
    { src: '../public/videos/video5.mp4', caption: 'Inspiration' },
];

const videoList = document.getElementById('videoList');

videos.forEach(({ src, caption }) => {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-item';

    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.onerror = function() {
        video.style.display = 'none';
        const notFound = document.createElement('div');
        notFound.className = 'video-not-found';
        notFound.innerHTML = 'Video Not Found';
        videoDiv.insertBefore(notFound, videoDiv.firstChild);
    };

    videoDiv.appendChild(video);

    const captionDiv = document.createElement('div');
    captionDiv.className = 'video-caption';
    captionDiv.textContent = caption;
    videoDiv.appendChild(captionDiv);

    videoList.appendChild(videoDiv);
});
