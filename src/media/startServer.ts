import NodeMediaServer from 'node-media-server'
import { mediaPort } from '../framework/env'

const config = {
    rtmp: {
        port: Number.parseInt(mediaPort),
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
    },
}

const startMediaServer = () => {
    const nms = new NodeMediaServer(config)
    nms.run()
}

export default startMediaServer
