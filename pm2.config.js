module.exports = {
    apps: [{
        script: 'api.js',
    }, {
        script: 'worker.js'
    }],

    // Deployment Configuration
    deploy: {
        production: {
            "user": "ubuntu",
            "host": ["127.0.0.1"],
            "ref": "origin/dev",
            "repo": "https://github.com/chesongsong/zhihui.git",
            "path": "/www/wwwroot/bigan",
            "post-deploy": "npm install && npm run build && pm2 deploy production"
        }
    }
};