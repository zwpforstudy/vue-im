/**
 * Created by dxlau on 2016/11/16.
 */

// 授权消息
function buildAuthMsg(from) {
  let authMsg = {}

  authMsg.from = from
  authMsg.to = 'system'
  authMsg.type = '1'
  return authMsg
}

// 文本消息
function buildTextMsg(from, to, msg) {
  let textMsg = {}

  textMsg.from = from
  textMsg.to = to
  textMsg.type = '100'

  let msgBody = {}
  msgBody.text = msg

  textMsg.msg = msgBody
  return textMsg
}

// 关闭连接指令消息
function buildDisconnectMsg(from) {
  let disconnectMsg = {}

  disconnectMsg.from = from
  disconnectMsg.to = 'system'
  disconnectMsg.type = '4'

  return disconnectMsg
}

export {buildAuthMsg, buildTextMsg, buildDisconnectMsg}
