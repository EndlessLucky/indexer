/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { TokenStreaming, TokenStreaming_CreateStream } from "generated";

TokenStreaming.CreateStream.handler(async ({ event, context }) => {
  console.log("event - ", event);

  const entity: TokenStreaming_CreateStream = {
    id: `${event.transactionId}_${event.receiptIndex}`,
    receiver_asset: 0n,
    sender_asset: 0n,
  };

  context.TokenStreaming_CreateStream.set(entity);
});
