function AccountDetails({ vendor, additionalInfo }) {
    
    return (  
        <section className=''>
            <div>
                {additionalInfo}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='w-full'>
                    <h3 className='font-medium text-2xl mb-3'>Personal Information</h3>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Full Name:</span>
                            { vendor.fullName }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Email Address:</span>
                            { vendor.email }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Phone Number:</span>
                            { vendor.phoneNumber }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Phone Address:</span>
                            { vendor.phoneAddress }
                        </p>
                    </div>
                </div>

                <div className='w-full'>
                    <h3 className='font-medium text-2xl mb-3'>Business Information</h3>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Business Name:</span>
                            { vendor.businessName }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Business Address:</span>
                            { vendor.businessAddress }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Business Phone Number:</span>
                            { vendor.businessPhoneNumber }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Business Email Address:</span>
                            { vendor.businessEmail }
                        </p>
                    </div>
                </div>

                <div className='w-full'>
                    <h3 className='font-medium text-2xl mb-3'>Business Description</h3>
                    <p>{ vendor.description }</p>
                </div>

                <div className="w-full">
                    <h3 className='font-medium text-2xl mb-3'>Products/Services</h3>
                    {vendor.products.map((product, i) => {
                        return (
                            <div className='mb-2' key={i}>
                                <h6 className='font-medium'>{product.name}:</h6>
                                <p>{product.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='w-full'>
                    <h3 className='font-medium text-2xl mb-3'>Business Documents</h3>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Business Registration:</span>
                            { vendor.businessReg }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Tax Identification Number:</span>
                            { vendor.taxIdNo }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Resale Certificate:</span>
                            { vendor.resaleCert }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Business Registration:</span>
                            { vendor.businessReg }
                        </p>
                    </div>
                </div>

                <div className='w-full'>
                    <h3 className='font-medium text-2xl mb-3'>Bank Information</h3>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Bank Name:</span>
                            { vendor.bankName }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Account Holder Name:</span>
                            { vendor.accountName }
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p>
                            <span className='mr-2 text-gray-600'>Account Number:</span>
                            { vendor.accountNo }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountDetails;