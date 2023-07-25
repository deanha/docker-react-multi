import { redis } from "./keys.js";
import { RedisClient } from "redis";

const { host, port } = redis;
const redisClient = new RedisClient({
  host,
  port,
  retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

const fib = (index) => {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
};

sub.on("message", (channel, message) => {
  redisClient.hset("values", message, fib(parseInt(message)));
});
sub.subscribe("insert");
