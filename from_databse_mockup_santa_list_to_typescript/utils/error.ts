import {NextFunction, Request, Response} from "express";



class ValidationError extends Error {}



const handleError = (err : Error, req: Request, res: Response, next: NextFunction) => {
    // if (err instanceof NotFoundError) {
    //     res
    //         .status(404)
    //         .render('error', {
    //             message: 'Nie można znaleźć elementu o danym ID'
    //         });
    // return;
    // }

    console.error(err);

    res
        .status(err instanceof ValidationError ? 404 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za klika minut',
        });
};

module.exports = {
    handleError,
    ValidationError,
};