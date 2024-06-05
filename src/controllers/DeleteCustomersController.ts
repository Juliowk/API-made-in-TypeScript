import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomersService } from "../services/DeleteCustomersService";

class DeleteCustomersController {
     async handle(request: FastifyRequest, reply: FastifyReply) {
          const { id } = request.query as { id: string }
          const customerService = new DeleteCustomersService();

          const customer = await customerService.execute({ id })

          reply.send(customer);
     }
}

export { DeleteCustomersController }