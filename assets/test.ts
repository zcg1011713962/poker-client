import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    start() {
        console.log("hello word");
        let ws = new WebSocket("ws:127.0.0.1:20000/dz");

        // 事件监听
        ws.onopen = function(event) {
            // 连接已打开
            console.log("WebSocket 连接已打开");
            // 发送消息
            ws.send("Hello, Server!");
        };
        ws.onmessage = function(event) {
            // 接收到消息
            console.log("收到消息：" + event.data);
        };
        
        ws.onclose = function(event) {
            // 连接已关闭
            console.log("WebSocket 连接已关闭");
        };
        
        ws.onerror = function(event) {
            // 发生错误
            console.error("WebSocket 错误：" + event);
        };
    }

    update(deltaTime: number) {
        
    }
}


