const { Message, Client } = require("discord.js");

/**
 * MessageController
 */
class MessageController {
  /**
   * 
   * @param {object} args
   * @param {RegExp} [args.pattern] マッチパターン
   * @param {function} [args.process] 処理
   * @param {boolean} [args.onReply] リプライ時のみ
   */
  constructor(args) {
    const { pattern, process, onReply } = args;
    this.pattern = pattern;
    this.process = process;
    this.onReply = !!onReply
  }

  /**
   * @param {Client} client
   * @param {Message} message 
   */
  executable(client, message) {
    if (!this.pattern.test(message.content)) {
      return false;
    }
    if (this.onReply && !message.mentions.has(client.user.id)) {
      return false;
    }
    return true;
  }

  /**
   * @param {Client} client
   * @param {Message} message 
   */
  async execute(client, message) {
    if (this.executable(client, message)) {
      await this.process(message);
    }
  }
}

module.exports = MessageController;