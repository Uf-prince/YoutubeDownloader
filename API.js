const { downloadYouTube } = require('@hiudyy/ytdl');



async function Download(url, res) {
    
    try {
        
        console.log(`Processing download for: ${url}`);
        
        const result = await downloadYouTube(url);
        

        
        if (!result.success || !result.filePath) {
            
            console.error('Download failed:', result);
            
            return res.status(500).json({
                
                status: 'error',
                
                error: 'Failed to get download link',
                
                detail: result
                    
            });
            
        }
        

        
        console.log(`Returning link: ${result.filePath}`);
        

        
        // Return JSON with the URL
        
        res.json({
            
            status: 'tunnel',
            
            url: result.filePath,
            
            title: result.title || 'video',
            
            thumbnail: result.thumbnail || '',
            
            quality: result.quality || '360p'
                
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








































