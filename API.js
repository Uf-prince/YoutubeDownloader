const { downloadYouTube } = require('@hiudyy/ytdl');



async function Download(url, res) {
    
    try {
        
        // Support both query params and body for flexibility
        
        const type = res.req.body.type || res.req.query.type || 'video';
        
        console.log(`Processing ${type} download for: ${url}`);
        

        
        const result = await downloadYouTube(url, type);
        

        
        if (!result.success || !result.filePath) {
            
            console.error('Download failed:', result);
            
            return res.status(500).json({
                
                status: 'error',
                
                error: 'Failed to get download link',
                
                detail: result
                    
            });
            
        }
        

        
        console.log(`Returning ${type} link: ${result.filePath}`);
        

        
        res.json({
            
            status: 'tunnel',
            
            url: result.filePath,
            
            title: result.title || 'video',
            
            thumbnail: result.thumbnail || '',
            
            quality: type === 'audio' ? '128kbps' : (result.quality || '360p'),
            
            type: type
                
        });
        

        
    } catch (err) {
        
        console.error('API Error:', err);
        
        res.status(500).json({
            
            status: 'error',
            
            error: 'Internal server error',
            
            message: err.message
                
        });
        
    }
    
}



async function GetPlaylist(url, res) {
    
    res.status(501).json({ error: 'Not implemented' });
    
}



async function DownloadPlaylist(playlistId, res) {
    
    res.status(501).json({ error: 'Not implemented' });
    
}



module.exports = { Download, GetPlaylist, DownloadPlaylist };











































