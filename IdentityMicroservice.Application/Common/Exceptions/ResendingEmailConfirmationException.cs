using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityMicroservice.Application.Common.Exceptions
{
    public class ResendingEmailConfirmationException : Exception
    {
        public ResendingEmailConfirmationException(string errMessage) : base(errMessage)
        {

        }
    }
}
