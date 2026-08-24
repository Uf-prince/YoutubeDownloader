const { downloadYouTube } = require('@hiudyy/ytdl');



async function Download(url, res) {
    
    try {
        
        console.log(`Processing download for: ${url}`);
        
        const result = await downloadYouTube(url);
        

        
        if (!result.success || !result.filePath) {
            
            console.error('Download failed:', result);
            
            return res.status(500).json({ error: 'Failed to get download link', detail: result });
            
        }
        

        
        console.log(`Redirecting to: ${result.filePath}`);
        
        res.redirect(result.filePath);
        
    } catch (err) {
        
        console.error('API Error:', err);
        
        res.status(500).json({ error: 'Internal server error', message: err.message });
        
    }
    
}



async function GetPlaylist(url, res) {
    
    res.status(501).json({ error: 'Not implemented' });
    
}



async function DownloadPlaylist(playlistId, res) {
    
    res.status(501).json({ error: 'Not implemented' });
    
}



module.exports = { Download, GetPlaylist, DownloadPlaylist };





















