export class DocumentBuilder {
    protected nextLine = "\n\n"
    protected header = "";
    protected body = "";
    protected footer = "";

    public addHeader(input: string):this {
        this.header = input;
        return this
    }

    public addBody(input: string):this {
        this.body = input;
        return this
    }

    public addFooter(input: string):this {
        this.footer = input;
        return this
    }

    public build(): string {
        return (this.header + this.nextLine + this.body + this.nextLine + this.footer).trim()
    }
}