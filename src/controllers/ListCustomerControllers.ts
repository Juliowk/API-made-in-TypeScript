import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomerService } from "../services/ListCustomersService"

class ListCustomerController {
     async handle(request: FastifyRequest, reply:FastifyReply) {
          const listCustomerService = new ListCustomerService();

          const customers = await listCustomerService.execute();

          reply.send(customers);
     }
}

export { ListCustomerController }