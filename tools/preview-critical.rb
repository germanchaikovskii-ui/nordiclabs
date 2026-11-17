require 'webrick'
root = File.expand_path('../website', __dir__)
server = WEBrick::HTTPServer.new(Port: 8082, BindAddress: '127.0.0.1', DocumentRoot: root, RequestCallback: ->(_req, res) { res['Cache-Control'] = 'no-store, max-age=0' })
trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }
server.start
