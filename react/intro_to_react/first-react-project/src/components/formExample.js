function Form() {
    return (
        <form action="/process" method="post">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="username" className="form-control" />
            </div>
        </form>
    )
}