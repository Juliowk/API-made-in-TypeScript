import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateCustomerControllers } from "./controllers/CreateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerControllers";
import { DeleteCustomersController } from "./controllers/DeleteCustomersController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
     fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
          return { ok: true };
     });

     fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
          return new CreateCustomerControllers().handle(request, reply);
     });

     fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
          return new ListCustomerController().handle(request, reply);
     });

     fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
          return new DeleteCustomersController().handle(request, reply);
     });
}