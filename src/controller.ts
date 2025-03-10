import Base from './base';
import Context from './context';
import ContextInterface from './interfaces/context';
import express, { Request, Response, NextFunction } from "express";

export default class Controller extends Base {

    context: ContextInterface;
    domain: string = '';

    constructor(domain: string = 'adtap.network') {
        super();
        this.domain = domain;
        this.context = new Context(this.domain);
    }

    process(): void {
        const app = express();
        app.use((req, res, next) => {
             this.handleRequest(req, res, next);
        });

        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }

    private handleRequest(req: Request, res: Response, next: NextFunction): void {
        // Example: Delegate requests based on route
        if (req.path.startsWith('/api')) {
            // Pass to an API service
            res.json({ message: "API route hit!" });
        } else {
            // Fallback handler
            res.send("Welcome to AdTap Network!");
        }
    }

}