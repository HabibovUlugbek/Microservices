const amqplib = require("amqplib");
const { v4: uuid } = require("uuid");

let amqplibConnection = null;

const getChannel = async () => {
  if (amqplibConnection === null) {
    amqplibConnection = await amqplib.connect(
      "amqps://uggozrmx:WWu7XQJAxjWqgM8TOuvyadACdXe-KCDR@armadillo.rmq.cloudamqp.com/uggozrmx"
    );
  }

  return await amqplibConnection.createChannel();
};

const RPCObserver = async (RPC_QUEUE_NAME, fakeResponse) => {
  const channel = await getChannel();

  await channel.assertQueue(RPC_QUEUE_NAME, {
    durable: false,
  });

  channel.prefetch(1);
  channel.consume(
    RPC_QUEUE_NAME,
    (msg) => {
      if (msg.content) {
        const payload = JSON.parse(msg.content.toString());
        const response = { fakeResponse, payload };
        channel.sendToQueue(
          msg.properties.replayTo,
          Buffer.from(JSON.stringify(response)),
          { correlationId: msg.properties.correlationId }
        );
      }
    },
    {
      noAck: false,
    }
  );
};

const RPCRequest = async () => {};
