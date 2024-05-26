const QuestionSection = () => {
    return (
        <div className="join join-vertical w-full my-10">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    How many items can I order?
                </div>
                <div className="collapse-content">
                    <p>We do limit orders to a maximum of 8 items up to the value of $1000, although you will be limited to 2 items of the same style/color. A message on screen will advise you, when ordering, if you exceed the basket limit.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    What payment methods can I use?
                </div>
                <div className="collapse-content">
                    <p>We accept the following payment methods when they are registered to a US billing address: PayPal, Visa, MasterCard, American Express, Discover, Diners Club, JCB and Klarna.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    Does Klarna affect your credit score?

                </div>
                <div className="collapse-content">
                    <p> When you choose to pay in 4 interest-free installments, Klarna may perform a soft credit check. This type of check will not impact your credit score and it will not show up as a hard inquiry on your credit report.</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionSection;