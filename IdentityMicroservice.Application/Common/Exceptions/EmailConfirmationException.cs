using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityMicroservice.Application.Common.Exceptions
{
    public class EmailConfirmationException : Exception
    {
        public EmailConfirmationException(string errMessage) : base(errMessage)
        {

        }
    }
}
