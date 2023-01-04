﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityMicroservice.Application.Common.Exceptions
{
    public class MaximumRefreshesExceededException : Exception
    {
        public MaximumRefreshesExceededException(string errMessage) : base(errMessage)
        {

        }
    }
}
